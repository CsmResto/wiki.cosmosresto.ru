import { useEffect, useId, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { createPortal } from 'react-dom'
import Fuse from 'fuse.js'
import { Locale } from '@/lib/i18n/locales'

export type SearchText = {
  openLabel: string
  label: string
  placeholder: string
  loading: string
  empty: string
  noResults: string
  error: string
  clearLabel: string
  closeLabel: string
}

type SearchIndexEntry = {
  slug: string
  title: string
  text: string
  description?: string
}

type SearchBoxProps = {
  locale: Locale
  assetPrefix: string
  text: SearchText
  onNavigate?: () => void
  onOpen?: () => void
}

const MAX_RESULTS = 8
const MIN_QUERY_LENGTH = 2

function buildExcerpt(content: string): string {
  const normalized = content.replace(/\s+/g, ' ').trim()
  if (normalized.length <= 160) {
    return normalized
  }
  return `${normalized.slice(0, 160).trim()}…`
}

export default function SearchBox({ locale, assetPrefix, text, onNavigate, onOpen }: SearchBoxProps) {
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState<Fuse<SearchIndexEntry> | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle')
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    let isActive = true
    const fetchIndex = async () => {
      setStatus('loading')
      try {
        const response = await fetch(`${assetPrefix}search-index/${locale}.json`)
        if (!response.ok) {
          throw new Error(`Search index fetch failed: ${response.status}`)
        }
        const data: SearchIndexEntry[] = await response.json()
        if (!isActive) {
          return
        }
        const fuse = new Fuse(data, {
          keys: [
            { name: 'title', weight: 0.4 },
            { name: 'description', weight: 0.2 },
            { name: 'text', weight: 0.4 },
          ],
          includeScore: true,
          threshold: 0.35,
          ignoreLocation: true,
          minMatchCharLength: MIN_QUERY_LENGTH,
        })
        setIndex(fuse)
        setStatus('ready')
      } catch (error) {
        if (!isActive) {
          return
        }
        setIndex(null)
        setStatus('error')
      }
    }

    fetchIndex()
    return () => {
      isActive = false
    }
  }, [assetPrefix, locale])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }
    inputRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  const trimmedQuery = query.trim()
  const results = useMemo(() => {
    if (!index || trimmedQuery.length < MIN_QUERY_LENGTH) {
      return []
    }
    return index.search(trimmedQuery, { limit: MAX_RESULTS }).map((result) => result.item)
  }, [index, trimmedQuery])

  const showEmpty = status === 'ready' && trimmedQuery.length < MIN_QUERY_LENGTH
  const showNoResults = status === 'ready' && trimmedQuery.length >= MIN_QUERY_LENGTH && results.length === 0

  return (
    <div className="wiki-search">
      <button
        type="button"
        className="wiki-search__trigger"
        onClick={() => {
          setIsOpen(true)
          onOpen?.()
        }}
      >
        <span className="wiki-search__trigger-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M16.5 16.5L21 21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        {text.openLabel}
      </button>
      {isOpen && isMounted
        ? createPortal(
            <div className="wiki-search-modal" role="dialog" aria-modal="true">
              <button
                type="button"
                className="wiki-search-modal__backdrop"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />
              <div className="wiki-search-modal__panel" role="document">
                <div className="wiki-search-modal__header">
                  <label className="wiki-search__label" htmlFor={inputId}>
                    {text.label}
                  </label>
                  <button
                    type="button"
                    className="wiki-search-modal__close"
                    onClick={() => setIsOpen(false)}
                    aria-label={text.closeLabel}
                  >
                    <span className="wiki-search-modal__close-icon" aria-hidden="true" />
                    <span className="wiki-search-modal__close-icon" aria-hidden="true" />
                  </button>
                </div>
                <div className="wiki-search__input-wrap">
                  <input
                    ref={inputRef}
                    id={inputId}
                    className="wiki-search__input"
                    type="search"
                    placeholder={text.placeholder}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
              {query && (
                <button
                  type="button"
                  className="wiki-search__clear"
                  onClick={() => setQuery('')}
                  aria-label={text.clearLabel}
                >
                  <span className="wiki-search__clear-icon" aria-hidden="true" />
                  <span className="wiki-search__clear-icon" aria-hidden="true" />
                </button>
              )}
            </div>
                <div className="wiki-search__results" aria-live="polite">
                  {status === 'loading' && <p className="wiki-search__status">{text.loading}</p>}
                  {status === 'error' && <p className="wiki-search__status">{text.error}</p>}
                  {showEmpty && <p className="wiki-search__status">{text.empty}</p>}
                  {showNoResults && <p className="wiki-search__status">{text.noResults}</p>}
                  {results.length > 0 && (
                    <ul className="wiki-search__list">
                      {results.map((item) => (
                        <li key={item.slug} className="wiki-search__item">
                          <Link
                            href={item.slug ? `/${locale}/${item.slug}` : `/${locale}`}
                            className="wiki-search__link"
                            onClick={() => {
                              onNavigate?.()
                              setIsOpen(false)
                            }}
                          >
                            <span className="wiki-search__title">{item.title}</span>
                            <span className="wiki-search__excerpt">{buildExcerpt(item.description ?? item.text)}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  )
}
