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
  const emptyStateLightSvg = `<svg class="empty-state__icon empty-state__icon--light" width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><mask id="mask0_0_31" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="29" y="92" width="182" height="148"><rect x="29.5652" y="92.6316" width="181.053" height="147.368" fill="url(#paint0_radial_0_31)"/></mask><g mask="url(#mask0_0_31)"><path d="M92.7231 92.6316H147.46L210.618 240H29.5652L92.7231 92.6316Z" fill="#1A1B1D"/></g><mask id="mask1_0_31" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="117" y="0" width="6" height="64"><path d="M117.986 2.48144e-05L122.197 0V63.1579L117.986 63.1579V2.48144e-05Z" fill="url(#paint1_linear_0_31)"/></mask><g mask="url(#mask1_0_31)"><path d="M117.986 7.62939e-06H122.197V63.1579H117.986V7.62939e-06Z" fill="#1A1B1D"/></g><mask id="mask2_0_31" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="88" y="67" width="64" height="26"><rect x="88.5126" y="67.3684" width="63.1579" height="25.2632" fill="url(#paint2_linear_0_31)"/></mask><g mask="url(#mask2_0_31)"><path d="M88.5126 92.6316C88.5126 78.6791 99.8233 67.3684 113.776 67.3684H126.407C140.36 67.3684 151.67 78.6791 151.67 92.6316H88.5126Z" fill="#1A1B1D"/></g><mask id="mask3_0_31" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="113" y="63" width="14" height="5"><rect x="113.776" y="63.1579" width="12.6316" height="4.21053" fill="url(#paint3_linear_0_31)"/></mask><g mask="url(#mask3_0_31)"><path d="M113.776 67.3684C113.776 65.043 115.661 63.1579 117.986 63.1579H122.197C124.522 63.1579 126.407 65.043 126.407 67.3684H113.776Z" fill="#1A1B1D"/></g><path opacity="0.5" d="M140.618 177.662C140.909 177.662 141.144 177.895 141.145 178.182C141.145 178.468 140.909 178.701 140.618 178.701C140.327 178.701 140.092 178.468 140.092 178.182C140.092 177.895 140.328 177.662 140.618 177.662ZM87.9863 166.233C88.2769 166.233 88.5126 166.466 88.5127 166.753C88.5127 167.04 88.277 167.272 87.9863 167.272C87.6956 167.272 87.4599 167.04 87.4599 166.753C87.4601 166.466 87.6957 166.233 87.9863 166.233ZM156.407 148.571C156.698 148.571 156.934 148.804 156.934 149.091C156.934 149.378 156.698 149.61 156.407 149.61C156.117 149.61 155.881 149.378 155.881 149.091C155.881 148.804 156.117 148.571 156.407 148.571ZM106.934 143.377C107.224 143.377 107.46 143.609 107.46 143.896C107.46 144.183 107.224 144.416 106.934 144.416C106.643 144.416 106.407 144.183 106.407 143.896C106.407 143.609 106.643 143.377 106.934 143.377ZM132.723 124.675C133.304 124.675 133.775 125.14 133.775 125.714C133.775 126.288 133.304 126.753 132.723 126.753C132.141 126.753 131.671 126.287 131.671 125.714C131.671 125.14 132.142 124.675 132.723 124.675ZM97.9863 110.13C98.5675 110.13 99.0389 110.595 99.0391 111.169C99.0391 111.743 98.5676 112.208 97.9863 112.208C97.405 112.208 96.9336 111.743 96.9336 111.169C96.9338 110.595 97.4051 110.13 97.9863 110.13ZM117.46 100.779C117.751 100.779 117.986 101.012 117.986 101.299C117.986 101.586 117.751 101.818 117.46 101.818C117.169 101.818 116.934 101.586 116.934 101.299C116.934 101.012 117.169 100.779 117.46 100.779Z" fill="#1A1B1D"/><defs><radialGradient id="paint0_radial_0_31" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(120.092 92.6316) rotate(90) scale(147.368 149.474)"><stop stop-color="white" stop-opacity="0.32"/><stop offset="1" stop-color="white" stop-opacity="0"/></radialGradient><linearGradient id="paint1_linear_0_31" x1="120.092" y1="0" x2="120.092" y2="63.1579" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0"/><stop offset="1" stop-color="white" stop-opacity="0.32"/></linearGradient><linearGradient id="paint2_linear_0_31" x1="88.5126" y1="67.3684" x2="119.028" y2="93.8572" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.32"/><stop offset="1" stop-color="white" stop-opacity="0.64"/></linearGradient><linearGradient id="paint3_linear_0_31" x1="113.776" y1="63.1579" x2="118.908" y2="68.5043" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.32"/><stop offset="1" stop-color="white" stop-opacity="0.64"/></linearGradient></defs></svg>`
  const emptyStateDarkSvg = `<svg class="empty-state__icon empty-state__icon--dark" width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><mask id="mask0_1_24" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="29" y="92" width="182" height="148"><rect x="29.5652" y="92.6316" width="181.053" height="147.368" fill="url(#paint0_radial_1_24)"/></mask><g mask="url(#mask0_1_24)"><path d="M92.7231 92.6316H147.46L210.618 240H29.5652L92.7231 92.6316Z" fill="#FEFDFF"/></g><mask id="mask1_1_24" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="117" y="0" width="6" height="64"><path d="M117.986 2.48144e-05L122.197 0V63.1579L117.986 63.1579V2.48144e-05Z" fill="url(#paint1_linear_1_24)"/></mask><g mask="url(#mask1_1_24)"><path d="M117.986 7.62939e-06H122.197V63.1579H117.986V7.62939e-06Z" fill="#FEFDFF"/></g><mask id="mask2_1_24" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="88" y="67" width="64" height="26"><rect x="88.5126" y="67.3684" width="63.1579" height="25.2632" fill="url(#paint2_linear_1_24)"/></mask><g mask="url(#mask2_1_24)"><path d="M88.5126 92.6316C88.5126 78.6791 99.8233 67.3684 113.776 67.3684H126.407C140.36 67.3684 151.67 78.6791 151.67 92.6316H88.5126Z" fill="#FEFDFF"/></g><mask id="mask3_1_24" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="113" y="63" width="14" height="5"><rect x="113.776" y="63.1579" width="12.6316" height="4.21053" fill="url(#paint3_linear_1_24)"/></mask><g mask="url(#mask3_1_24)"><path d="M113.776 67.3684C113.776 65.043 115.661 63.1579 117.986 63.1579H122.197C124.522 63.1579 126.407 65.043 126.407 67.3684H113.776Z" fill="#FEFDFF"/></g><path opacity="0.5" d="M140.618 177.662C140.909 177.662 141.144 177.895 141.145 178.182C141.145 178.468 140.909 178.701 140.618 178.701C140.327 178.701 140.092 178.468 140.092 178.182C140.092 177.895 140.328 177.662 140.618 177.662ZM87.9863 166.233C88.2769 166.233 88.5126 166.466 88.5127 166.753C88.5127 167.04 88.277 167.272 87.9863 167.272C87.6956 167.272 87.4599 167.04 87.4599 166.753C87.4601 166.466 87.6957 166.233 87.9863 166.233ZM156.407 148.571C156.698 148.571 156.934 148.804 156.934 149.091C156.934 149.378 156.698 149.61 156.407 149.61C156.117 149.61 155.881 149.378 155.881 149.091C155.881 148.804 156.117 148.571 156.407 148.571ZM106.934 143.377C107.224 143.377 107.46 143.609 107.46 143.896C107.46 144.183 107.224 144.416 106.934 144.416C106.643 144.416 106.407 144.183 106.407 143.896C106.407 143.609 106.643 143.377 106.934 143.377ZM132.723 124.675C133.304 124.675 133.775 125.14 133.775 125.714C133.775 126.288 133.304 126.753 132.723 126.753C132.141 126.753 131.671 126.287 131.671 125.714C131.671 125.14 132.142 124.675 132.723 124.675ZM97.9863 110.13C98.5675 110.13 99.0389 110.595 99.039 111.169C99.039 111.743 98.5676 112.208 97.9863 112.208C97.405 112.208 96.9336 111.743 96.9336 111.169C96.9338 110.595 97.4051 110.13 97.9863 110.13ZM117.46 100.779C117.751 100.779 117.986 101.012 117.986 101.299C117.986 101.586 117.751 101.818 117.46 101.818C117.169 101.818 116.934 101.586 116.934 101.299C116.934 101.012 117.169 100.779 117.46 100.779Z" fill="#FEFDFF"/><defs><radialGradient id="paint0_radial_1_24" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(120.092 92.6316) rotate(90) scale(147.368 149.474)"><stop stop-color="white" stop-opacity="0.32"/><stop offset="1" stop-color="white" stop-opacity="0"/></radialGradient><linearGradient id="paint1_linear_1_24" x1="120.092" y1="0" x2="120.092" y2="63.1579" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0"/><stop offset="1" stop-color="white" stop-opacity="0.32"/></linearGradient><linearGradient id="paint2_linear_1_24" x1="88.5126" y1="67.3684" x2="119.028" y2="93.8572" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.32"/><stop offset="1" stop-color="white" stop-opacity="0.64"/></linearGradient><linearGradient id="paint3_linear_1_24" x1="113.776" y1="63.1579" x2="118.908" y2="68.5043" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.32"/><stop offset="1" stop-color="white" stop-opacity="0.64"/></linearGradient></defs></svg>`
  const emptyStateSvg = `${emptyStateLightSvg}${emptyStateDarkSvg}`

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
