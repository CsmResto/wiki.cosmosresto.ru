const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const { remark } = require('remark')
let cachedStrip = null

const contentRoot = path.join(process.cwd(), 'content')
const outputRoot = path.join(process.cwd(), 'public', 'search-index')

function getLocales() {
  if (!fs.existsSync(contentRoot)) {
    return []
  }
  return fs
    .readdirSync(contentRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
}

function getAllMarkdownFiles(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...getAllMarkdownFiles(fullPath))
      continue
    }
    if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath)
    }
  }

  return files
}

function toSlug(localeDir, filePath) {
  const relative = path.relative(localeDir, filePath)
  const withoutExt = relative.replace(/\.md$/i, '')
  return withoutExt.split(path.sep).join('/')
}

function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m)
  if (!match) {
    return null
  }
  return match[1].replace(/\s*\{#[A-Za-z0-9_-]+\}\s*$/, '').trim()
}

async function getStripPlugin() {
  if (cachedStrip) {
    return cachedStrip
  }
  const mod = await import('strip-markdown')
  cachedStrip = mod.default ?? mod
  return cachedStrip
}

async function extractPlainText(content) {
  const strip = await getStripPlugin()
  const file = await remark().use(strip).process(content)
  return String(file).replace(/\s+/g, ' ').trim()
}

async function buildIndexForLocale(locale) {
  const localeDir = path.join(contentRoot, locale)
  const files = getAllMarkdownFiles(localeDir)
  const index = []

  for (const filePath of files) {
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)
    const text = await extractPlainText(content)
    const slug = toSlug(localeDir, filePath)
    const title = typeof data.title === 'string' ? data.title : extractTitle(content) ?? path.basename(slug)

    index.push({
      slug,
      title,
      text,
      description: typeof data.description === 'string' ? data.description : undefined,
    })
  }

  index.sort((left, right) => left.title.localeCompare(right.title, locale))
  return index
}

async function run() {
  const locales = getLocales()
  if (locales.length === 0) {
    console.warn('No locales found in content/. Search index was not generated.')
    return
  }

  fs.mkdirSync(outputRoot, { recursive: true })

  for (const locale of locales) {
    const index = await buildIndexForLocale(locale)
    const outputPath = path.join(outputRoot, `${locale}.json`)
    fs.writeFileSync(outputPath, JSON.stringify(index))
    console.log(`Search index generated: ${outputPath} (${index.length} entries)`) // eslint-disable-line no-console
  }
}

run().catch((error) => {
  console.error('Failed to generate search index', error) // eslint-disable-line no-console
  process.exit(1)
})
