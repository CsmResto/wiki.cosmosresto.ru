import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { Locale } from '@/lib/i18n/locales'

export interface MarkdownFile {
  fullPath: string
  slug: string
}

export interface WikiPageMeta {
  slug: string
  title: string
  description?: string
  order?: number
  updatedAt?: string
}

export interface MarkdownData extends WikiPageMeta {
  contentHtml: string
  frontmatter: Record<string, unknown>
}

export interface WikiTreeNode {
  name: string
  description?: string
  slug: string
  directories: WikiTreeNode[]
  pages: WikiPageMeta[]
}

export interface WikiDirectoryData {
  slug: string
  name: string
  directories: Array<{ name: string; description: string | null; slug: string }>
  pages: WikiPageMeta[]
}

const contentDirectory = path.join(process.cwd(), 'content')

function getLocaleContentDirectory(locale: Locale): string {
  return path.join(contentDirectory, locale)
}

function toPosixPath(filePath: string): string {
  return filePath.replace(/\\/g, '/')
}

function toTitleFromSlug(slug: string): string {
  const lastPart = slug.split('/').pop() ?? slug
  return lastPart
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

function parseWikiMeta(slug: string, fileContents: string): WikiPageMeta {
  const { data } = matter(fileContents)

  const fmTitle = typeof data.title === 'string' ? data.title : undefined
  const fmDescription = typeof data.description === 'string' ? data.description : undefined
  const fmOrder = typeof data.order === 'number' ? data.order : undefined
  const fmUpdatedAt = typeof data.updatedAt === 'string' ? data.updatedAt : undefined

  const meta: WikiPageMeta = {
    slug,
    title: fmTitle ?? toTitleFromSlug(slug),
  }

  if (fmDescription !== undefined) {
    meta.description = fmDescription
  }
  if (fmOrder !== undefined) {
    meta.order = fmOrder
  }
  if (fmUpdatedAt !== undefined) {
    meta.updatedAt = fmUpdatedAt
  }

  return meta
}

function toSerializableValue(value: unknown): unknown {
  if (value instanceof Date) {
    return value.toISOString()
  }

  if (Array.isArray(value)) {
    return value.map((item) => toSerializableValue(item))
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>).map(([key, item]) => [
      key,
      toSerializableValue(item),
    ])
    return Object.fromEntries(entries)
  }

  return value
}

function toSafeLanguageId(rawLanguage: string): string {
  const normalized = rawLanguage.trim().toLowerCase()
  if (!normalized) {
    return 'text'
  }

  return normalized.replace(/[^a-z0-9#+-]/g, '')
}

function toLanguageLabel(language: string): string {
  if (!language || language === 'text') {
    return 'Text'
  }

  if (language === 'ts') {
    return 'TypeScript'
  }
  if (language === 'js') {
    return 'JavaScript'
  }
  if (language === 'sh') {
    return 'Shell'
  }

  return language.toUpperCase()
}

function slugifyHeading(text: string): string {
  const normalized = text
    .trim()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\s]+/g, '-')
    .replace(/[^\p{L}\p{N}-]/gu, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

  return normalized || 'section'
}

type MarkdownNode = {
  type?: string
  value?: unknown
  url?: string
  children?: MarkdownNode[]
  data?: {
    hProperties?: Record<string, unknown>
  }
}

function getHeadingText(node: MarkdownNode | null | undefined): string {
  if (!node) {
    return ''
  }

  if (node.type === 'text' || node.type === 'inlineCode') {
    return String(node.value ?? '')
  }

  if (Array.isArray(node.children)) {
    return node.children.map((child: MarkdownNode) => getHeadingText(child)).join('')
  }

  return ''
}

function extractCustomHeadingId(node: MarkdownNode): string | null {
  if (!Array.isArray(node.children) || node.children.length === 0) {
    return null
  }

  const lastIndex = node.children.length - 1
  const lastChild = node.children[lastIndex]

  if (lastChild?.type !== 'text' || typeof lastChild.value !== 'string') {
    return null
  }

  const text = lastChild.value
  const match = text.match(/\s*\{#([A-Za-z0-9_-]+)\}\s*$/)
  if (!match) {
    return null
  }

  const id = match[1]
  const trimmed = text.replace(/\s*\{#[A-Za-z0-9_-]+\}\s*$/, '').trimEnd()

  if (trimmed) {
    lastChild.value = trimmed
  } else {
    node.children.splice(lastIndex, 1)
  }

  return id
}

function remarkAutolinkHeadings() {
  return (tree: MarkdownNode) => {
    const slugCounts = new Map<string, number>()

    const visit = (node: MarkdownNode | null | undefined) => {
      if (!node || typeof node !== 'object') {
        return
      }

      if (node.type === 'heading') {
        const customId = extractCustomHeadingId(node)
        const text = getHeadingText(node)
        const baseSlug = customId ?? slugifyHeading(text)
        const currentCount = slugCounts.get(baseSlug) ?? 0
        const nextCount = currentCount + 1
        slugCounts.set(baseSlug, nextCount)
        const slug = nextCount === 1 ? baseSlug : `${baseSlug}-${nextCount}`

        node.data ||= {}
        node.data.hProperties ||= {}
        node.data.hProperties.id = slug

        node.children = [
          {
            type: 'link',
            url: `#${slug}`,
            data: {
              hProperties: {
                className: ['heading-anchor'],
              },
            },
            children: node.children ?? [],
          },
        ]
      }

      if (Array.isArray(node.children)) {
        node.children.forEach((child: MarkdownNode) => visit(child))
      }
    }

    visit(tree)
  }
}

function enhanceMarkdownHtml(contentHtml: string): string {
  const emptyStateSvg = `<svg class="empty-state__icon" width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g clip-path="url(#clip0_19332_212462)"><mask id="mask0_19332_212462" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="29" y="92" width="182" height="148"><rect x="29.5645" y="92.6318" width="181.053" height="147.368" fill="url(#paint0_radial_19332_212462)"/></mask><g mask="url(#mask0_19332_212462)"><path d="M92.7223 92.6318H147.459L210.617 240H29.5645L92.7223 92.6318Z" fill="#DCD8D3"/></g><mask id="mask1_19332_212462" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="117" y="0" width="6" height="64"><path d="M117.986 2.48144e-05L122.197 0V63.1579L117.986 63.1579V2.48144e-05Z" fill="url(#paint1_linear_19332_212462)"/></mask><g mask="url(#mask1_19332_212462)"><path d="M117.986 0H122.197V63.1579H117.986V0Z" fill="#DCD8D3"/></g><mask id="mask2_19332_212462" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="88" y="67" width="64" height="26"><rect x="88.5117" y="67.3682" width="63.1579" height="25.2632" fill="url(#paint2_linear_19332_212462)"/></mask><g mask="url(#mask2_19332_212462)"><path d="M88.5117 92.6313C88.5117 78.6789 99.8224 67.3682 113.775 67.3682H126.406C140.359 67.3682 151.67 78.6789 151.67 92.6313H88.5117Z" fill="#DCD8D3"/></g><mask id="mask3_19332_212462" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="113" y="63" width="14" height="5"><rect x="113.775" y="63.1577" width="12.6316" height="4.21053" fill="url(#paint3_linear_19332_212462)"/></mask><g mask="url(#mask3_19332_212462)"><path d="M113.775 67.3682C113.775 65.0428 115.661 63.1577 117.986 63.1577H122.196C124.522 63.1577 126.407 65.0428 126.407 67.3682H113.775Z" fill="#DCD8D3"/></g><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M117.459 101.818C117.75 101.818 117.985 101.586 117.985 101.299C117.985 101.012 117.75 100.779 117.459 100.779C117.168 100.779 116.933 101.012 116.933 101.299C116.933 101.586 117.168 101.818 117.459 101.818ZM99.0379 111.169C99.0379 111.743 98.5667 112.208 97.9853 112.208C97.4039 112.208 96.9327 111.743 96.9327 111.169C96.9327 110.595 97.4039 110.13 97.9853 110.13C98.5667 110.13 99.0379 110.595 99.0379 111.169ZM133.775 125.714C133.775 126.288 133.303 126.753 132.722 126.753C132.141 126.753 131.67 126.288 131.67 125.714C131.67 125.14 132.141 124.675 132.722 124.675C133.303 124.675 133.775 125.14 133.775 125.714ZM88.5116 166.753C88.5116 167.04 88.276 167.273 87.9853 167.273C87.6946 167.273 87.459 167.04 87.459 166.753C87.459 166.466 87.6946 166.234 87.9853 166.234C88.276 166.234 88.5116 166.466 88.5116 166.753ZM156.406 149.61C156.697 149.61 156.933 149.378 156.933 149.091C156.933 148.804 156.697 148.571 156.406 148.571C156.116 148.571 155.88 148.804 155.88 149.091C155.88 149.378 156.116 149.61 156.406 149.61ZM141.143 178.182C141.143 178.469 140.908 178.701 140.617 178.701C140.326 178.701 140.091 178.469 140.091 178.182C140.091 177.895 140.326 177.663 140.617 177.663C140.908 177.663 141.143 177.895 141.143 178.182ZM106.933 144.416C107.223 144.416 107.459 144.183 107.459 143.896C107.459 143.609 107.223 143.377 106.933 143.377C106.642 143.377 106.406 143.609 106.406 143.896C106.406 144.183 106.642 144.416 106.933 144.416Z" fill="#DCD8D3"/></g><defs><radialGradient id="paint0_radial_19332_212462" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(120.091 92.6318) rotate(90) scale(147.368 149.474)"><stop stop-color="white" stop-opacity="0.32"/><stop offset="1" stop-color="white" stop-opacity="0"/></radialGradient><linearGradient id="paint1_linear_19332_212462" x1="120.092" y1="0" x2="120.092" y2="63.1579" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0"/><stop offset="1" stop-color="white" stop-opacity="0.32"/></linearGradient><linearGradient id="paint2_linear_19332_212462" x1="88.5117" y1="67.3682" x2="119.027" y2="93.8569" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.32"/><stop offset="1" stop-color="white" stop-opacity="0.64"/></linearGradient><linearGradient id="paint3_linear_19332_212462" x1="113.775" y1="63.1577" x2="118.908" y2="68.5041" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.32"/><stop offset="1" stop-color="white" stop-opacity="0.64"/></linearGradient><clipPath id="clip0_19332_212462"><rect width="240" height="240" fill="white"/></clipPath></defs></svg>`

  const withEmptyState = contentHtml.replace(
    /<p>\s*\[\[empty-state(?::([\s\S]*?))?\]\]\s*<\/p>/g,
    (_match, rawMessage) => {
      const defaultMessage = 'Страница пока пишется, но обязательно напишется'
      const message = typeof rawMessage === 'string' && rawMessage.trim().length > 0
        ? rawMessage.trim()
        : defaultMessage
      const safeMessage = message
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
      return `<div class="empty-state" data-empty-state>${emptyStateSvg}<p class="empty-state__text">${safeMessage}</p></div>`
    }
  )

  const withTaskItems = withEmptyState.replace(/<li>\s*\[( |x|X)\]\s+([\s\S]*?)<\/li>/g, (_match, marker, itemHtml) => {
    const isChecked = marker.toLowerCase() === 'x'
    const checkedAttribute = isChecked ? ' checked' : ''
    return `<li class="task-list-item"><label><input type="checkbox" disabled${checkedAttribute} /><span>${itemHtml}</span></label></li>`
  })

  const withTaskLists = withTaskItems.replace(/<ul>([\s\S]*?)<\/ul>/g, (listHtml, listInnerHtml) => {
    if (!listInnerHtml.includes('class="task-list-item"')) {
      return listHtml
    }
    return `<ul class="task-list">${listInnerHtml}</ul>`
  })

  const withTypedCodeBlocks = withTaskLists.replace(
    /<pre><code class="language-([^"]+)">([\s\S]*?)<\/code><\/pre>/g,
    (_match, language, codeHtml) => {
      const safeLanguage = toSafeLanguageId(language)
      const languageLabel = toLanguageLabel(safeLanguage)
      return `<figure class="code-block" data-language="${safeLanguage}"><figcaption class="code-block__header"><span class="code-block__lang">${languageLabel}</span><button type="button" class="code-block__copy" data-copy-code>Copy</button></figcaption><pre><code class="language-${safeLanguage}">${codeHtml}</code></pre></figure>`
    }
  )

  return withTypedCodeBlocks.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g, (_match, codeHtml) => {
    return `<figure class="code-block" data-language="text"><figcaption class="code-block__header"><span class="code-block__lang">Text</span><button type="button" class="code-block__copy" data-copy-code>Copy</button></figcaption><pre><code>${codeHtml}</code></pre></figure>`
  })
}

function sortPages(pages: WikiPageMeta[], locale: Locale): WikiPageMeta[] {
  return pages.sort((left, right) => {
    const leftOrder = left.order ?? Number.MAX_SAFE_INTEGER
    const rightOrder = right.order ?? Number.MAX_SAFE_INTEGER

    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder
    }
    return left.title.localeCompare(right.title, locale)
  })
}

function ensureDirectoryNode(
  root: WikiTreeNode,
  directoryMap: Map<string, WikiTreeNode>,
  directorySlug: string,
  directoryMetaMap: Map<string, { title: string; description?: string }>
): WikiTreeNode {
  if (directoryMap.has(directorySlug)) {
    return directoryMap.get(directorySlug) as WikiTreeNode
  }

  const segments = directorySlug.split('/').filter(Boolean)
  let parentSlug = ''
  let parentNode = root

  for (const segment of segments) {
    const currentSlug = parentSlug ? `${parentSlug}/${segment}` : segment
    const existingNode = directoryMap.get(currentSlug)

    if (existingNode) {
      parentNode = existingNode
      parentSlug = currentSlug
      continue
    }

    const metaOverride = directoryMetaMap.get(currentSlug)
    const nextNode: WikiTreeNode = {
      name: metaOverride?.title ?? toTitleFromSlug(currentSlug),
      description: metaOverride?.description,
      slug: currentSlug,
      directories: [],
      pages: [],
    }

    parentNode.directories.push(nextNode)
    directoryMap.set(currentSlug, nextNode)
    parentNode = nextNode
    parentSlug = currentSlug
  }

  return parentNode
}

function sortWikiTree(node: WikiTreeNode, locale: Locale): WikiTreeNode {
  node.directories.sort((left, right) => left.name.localeCompare(right.name, locale))
  sortPages(node.pages, locale)
  node.directories.forEach((child) => sortWikiTree(child, locale))
  return node
}

function findWikiTreeNodeBySlug(node: WikiTreeNode, slug: string): WikiTreeNode | null {
  if (node.slug === slug) {
    return node
  }

  for (const child of node.directories) {
    const found = findWikiTreeNodeBySlug(child, slug)
    if (found) {
      return found
    }
  }

  return null
}

export function getAllMarkdownFiles(
  locale: Locale,
  dirPath: string = getLocaleContentDirectory(locale),
  basePath: string = ''
): MarkdownFile[] {
  if (!fs.existsSync(dirPath)) {
    return []
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  const files: MarkdownFile[] = []

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    const relativePath = path.join(basePath, entry.name)

    if (entry.isDirectory()) {
      files.push(...getAllMarkdownFiles(locale, fullPath, relativePath))
    } else if (entry.name.endsWith('.md')) {
      const slug = toPosixPath(relativePath).replace(/\.md$/, '')
      files.push({ fullPath, slug })
    }
  }

  return files
}

export function getAllDirectorySlugs(
  locale: Locale,
  dirPath: string = getLocaleContentDirectory(locale),
  basePath: string = ''
): string[] {
  if (!fs.existsSync(dirPath)) {
    return []
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  const directories: string[] = []

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue
    }

    const relativePath = toPosixPath(path.join(basePath, entry.name))
    directories.push(relativePath)
    directories.push(...getAllDirectorySlugs(locale, path.join(dirPath, entry.name), relativePath))
  }

  return directories
}

export function getAllWikiPages(locale: Locale): WikiPageMeta[] {
  return sortPages(
    getAllMarkdownFiles(locale).map(({ fullPath, slug }) => {
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      return parseWikiMeta(slug, fileContents)
    }),
    locale
  )
}

export function getAllWikiRouteSlugs(locale: Locale): string[] {
  const fileSlugs = getAllMarkdownFiles(locale).map((item) => item.slug)
  const directorySlugs = getAllDirectorySlugs(locale)

  const fileSet = new Set(fileSlugs)
  for (const directorySlug of directorySlugs) {
    if (fileSet.has(directorySlug)) {
      throw new Error(
        `Route conflict at "${directorySlug}". Use "${directorySlug}/index.md" for folder landing pages instead of "${directorySlug}.md".`
      )
    }
  }

  return [...new Set([...directorySlugs, ...fileSlugs])]
}

export function getWikiTree(locale: Locale): WikiTreeNode {
  const root: WikiTreeNode = {
    name: 'content',
    slug: '',
    directories: [],
    pages: [],
  }

  const directoryMap = new Map<string, WikiTreeNode>([['', root]])
  const pages = getAllWikiPages(locale)
  const directoryMetaMap = new Map<string, { title: string; description?: string }>()

  for (const page of pages) {
    if (page.slug === 'index') {
      continue
    }

    if (page.slug.endsWith('/index')) {
      const directorySlug = page.slug.replace(/\/index$/, '')
      if (directorySlug) {
        directoryMetaMap.set(directorySlug, {
          title: page.title,
          description: page.description,
        })
      }
    }
  }

  for (const directorySlug of getAllDirectorySlugs(locale)) {
    ensureDirectoryNode(root, directoryMap, directorySlug, directoryMetaMap)
  }

  for (const page of pages) {
    if (page.slug === 'index' || page.slug.endsWith('/index')) {
      continue
    }
    const segments = page.slug.split('/')
    segments.pop()
    const parentSlug = segments.join('/')
    ensureDirectoryNode(root, directoryMap, parentSlug, directoryMetaMap).pages.push(page)
  }

  return sortWikiTree(root, locale)
}

export function getWikiDirectoryData(locale: Locale, slug: string): WikiDirectoryData | null {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, '')
  const tree = getWikiTree(locale)
  const node = findWikiTreeNodeBySlug(tree, normalizedSlug)

  if (!node) {
    return null
  }

  return {
    slug: normalizedSlug,
    name: node.name,
    directories: node.directories.map((directory) => ({
      name: directory.name,
      description: directory.description ?? null,
      slug: directory.slug,
    })),
    pages: node.pages,
  }
}

export function isDirectorySlug(locale: Locale, slug: string): boolean {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, '')
  if (!normalizedSlug) {
    return true
  }

  const directoryPath = path.join(getLocaleContentDirectory(locale), normalizedSlug)
  return fs.existsSync(directoryPath) && fs.statSync(directoryPath).isDirectory()
}

export async function getMarkdownData(locale: Locale, slug: string): Promise<MarkdownData> {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, '')
  const fullPath = path.join(getLocaleContentDirectory(locale), `${normalizedSlug}.md`)

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Markdown page not found for slug: ${slug}`)
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(remarkAutolinkHeadings)
    .use(html)
    .process(content)

  return {
    ...parseWikiMeta(normalizedSlug, fileContents),
    contentHtml: enhanceMarkdownHtml(processedContent.toString()),
    frontmatter: toSerializableValue(data) as Record<string, unknown>,
  }
}
