import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import LocaleSwitcher from '@/components/LocaleSwitcher'
import { isLocale, Locale, locales } from '@/lib/i18n/locales'
import {
  getAllWikiRouteSlugs,
  getMarkdownData,
  getWikiDirectoryData,
  isDirectorySlug,
  MarkdownData,
  WikiDirectoryData,
} from '@/lib/markdown'

type BreadcrumbItem = {
  slug: string
  label: string
}

type PageProps =
  | {
      kind: 'directory'
      locale: Locale
      directory: WikiDirectoryData
      breadcrumbs: BreadcrumbItem[]
    }
  | {
      kind: 'page'
      locale: Locale
      page: MarkdownData
      breadcrumbs: BreadcrumbItem[]
    }

type UiText = {
  rootTitle: string
  homeDescription: string
}

const uiTextByLocale: Record<Locale, UiText> = {
  ru: {
    rootTitle: 'CSM Wiki',
    homeDescription: 'Корневая страница wiki',
  },
  en: {
    rootTitle: 'CSM Wiki',
    homeDescription: 'Wiki root page',
  },
}

function buildWikiHref(locale: Locale, slug: string): string {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, '')
  return normalizedSlug ? `/${locale}/${normalizedSlug}` : `/${locale}`
}

function buildDirectoryBreadcrumbs(locale: Locale, slug: string): BreadcrumbItem[] {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, '')
  if (!normalizedSlug) {
    return []
  }

  const segments = normalizedSlug.split('/').filter(Boolean)
  return segments.map((_, index) => {
    const itemSlug = segments.slice(0, index + 1).join('/')
    const directory = getWikiDirectoryData(locale, itemSlug)

    return {
      slug: itemSlug,
      label: directory?.name ?? segments[index],
    }
  })
}

function buildPageBreadcrumbs(locale: Locale, page: MarkdownData): BreadcrumbItem[] {
  const segments = page.slug.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = []

  for (let index = 0; index < segments.length - 1; index += 1) {
    const directorySlug = segments.slice(0, index + 1).join('/')
    const directory = getWikiDirectoryData(locale, directorySlug)

    breadcrumbs.push({
      slug: directorySlug,
      label: directory?.name ?? segments[index],
    })
  }

  breadcrumbs.push({
    slug: page.slug,
    label: page.title,
  })

  return breadcrumbs
}

export default function WikiPage(props: PageProps) {
  const text = uiTextByLocale[props.locale]
  const currentSlug = props.kind === 'directory' ? props.directory.slug : props.page.slug
  const breadcrumbs = props.breadcrumbs

  if (props.kind === 'directory') {
    const { directory, locale } = props
    const isRootDirectory = directory.slug === ''
    const directoryTitle = isRootDirectory ? text.rootTitle : directory.name

    return (
      <>
        <Head>
          <title>{directoryTitle} | CSM Wiki</title>
          <meta name="description" content={text.homeDescription} />
        </Head>
        <main className="wiki-layout">
          <header className="wiki-toolbar">
            {isRootDirectory ? (
              <span />
            ) : (
              <nav className="wiki-breadcrumbs" aria-label="Breadcrumb">
                <Link href={buildWikiHref(locale, '')} className="wiki-breadcrumb-link">
                  {text.rootTitle}
                </Link>
                {breadcrumbs.map((item, index) => {
                  const isLast = index === breadcrumbs.length - 1
                  return (
                    <span key={item.slug} className="wiki-breadcrumb-item">
                      <span className="wiki-breadcrumb-separator">/</span>
                      {isLast ? (
                        <span className="wiki-breadcrumb-current">{item.label}</span>
                      ) : (
                        <Link href={buildWikiHref(locale, item.slug)} className="wiki-breadcrumb-link">
                          {item.label}
                        </Link>
                      )}
                    </span>
                  )
                })}
              </nav>
            )}
            <LocaleSwitcher locale={locale} slug={currentSlug} />
          </header>

          <h1>{directoryTitle}</h1>

          <ul className="wiki-tree-list">
            {directory.directories.map((folder) => (
              <li key={folder.slug} className="wiki-page-list-item">
                <Link href={buildWikiHref(locale, folder.slug)} className="wiki-page-link">
                  {folder.name}
                </Link>
              </li>
            ))}

            {directory.pages.map((page) => (
              <li key={page.slug} className="wiki-page-list-item">
                <Link href={buildWikiHref(locale, page.slug)} className="wiki-page-link">
                  {page.title}
                </Link>
                {page.description && <p className="wiki-page-meta">{page.description}</p>}
              </li>
            ))}
          </ul>
        </main>
      </>
    )
  }

  const { page, locale } = props
  return (
    <>
      <Head>
        <title>{page.title} | CSM Wiki</title>
        {page.description && <meta name="description" content={page.description} />}
      </Head>
      <main className="wiki-layout">
        <header className="wiki-toolbar">
          <nav className="wiki-breadcrumbs" aria-label="Breadcrumb">
            <Link href={buildWikiHref(locale, '')} className="wiki-breadcrumb-link">
              {text.rootTitle}
            </Link>
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1
              return (
                <span key={item.slug} className="wiki-breadcrumb-item">
                  <span className="wiki-breadcrumb-separator">/</span>
                  {isLast ? (
                    <span className="wiki-breadcrumb-current">{item.label}</span>
                  ) : (
                    <Link href={buildWikiHref(locale, item.slug)} className="wiki-breadcrumb-link">
                      {item.label}
                    </Link>
                  )}
                </span>
              )
            })}
          </nav>
          <LocaleSwitcher locale={locale} slug={currentSlug} />
        </header>

        <article className="wiki-article">
          <h1>{page.title}</h1>
          {page.description && <p className="wiki-subtitle">{page.description}</p>}
          <div dangerouslySetInnerHTML={{ __html: page.contentHtml }} />
        </article>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: Array<{ params: { locale: Locale; slug: string[] } }> = []

  for (const locale of locales) {
    paths.push({ params: { locale, slug: [] } })

    for (const slug of getAllWikiRouteSlugs(locale)) {
      paths.push({ params: { locale, slug: slug.split('/') } })
    }
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PageProps, { locale: string; slug?: string[] }> = async ({ params }) => {
  if (!params?.locale || !isLocale(params.locale)) {
    return { notFound: true }
  }

  const locale = params.locale
  const slug = params.slug?.join('/') ?? ''

  if (isDirectorySlug(locale, slug)) {
    const directory = getWikiDirectoryData(locale, slug)
    if (!directory) {
      return { notFound: true }
    }

    return {
      props: {
        kind: 'directory',
        locale,
        directory,
        breadcrumbs: buildDirectoryBreadcrumbs(locale, slug),
      },
    }
  }

  try {
    const page = await getMarkdownData(locale, slug)
    return {
      props: {
        kind: 'page',
        locale,
        page,
        breadcrumbs: buildPageBreadcrumbs(locale, page),
      },
    }
  } catch {
    return { notFound: true }
  }
}
