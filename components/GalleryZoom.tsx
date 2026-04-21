import { useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import type { ImgHTMLAttributes, KeyboardEvent as ReactKeyboardEvent, MouseEvent } from 'react'

type GalleryImage = ImgHTMLAttributes<HTMLImageElement>

type GalleryZoomImageProps = {
  images: GalleryImage[]
  index: number
  imgProps: ImgHTMLAttributes<HTMLImageElement>
}

export function GalleryZoomImage({ images, index, imgProps }: GalleryZoomImageProps) {
  const [currentIndex, setCurrentIndex] = useState(index)
  const [isZoomed, setIsZoomed] = useState(false)
  const [loadedSrc, setLoadedSrc] = useState<string | undefined>()

  const total = images.length
  const currentImage = useMemo(() => images[currentIndex] ?? images[index], [currentIndex, images, index])

  const openZoom = useCallback(() => {
    setLoadedSrc(undefined)
    setCurrentIndex(index)
    setIsZoomed(true)
  }, [index])

  const closeZoom = useCallback(() => {
    setIsZoomed(false)
  }, [])

  const handlePreviewKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLImageElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        openZoom()
      }
    },
    [openZoom]
  )

  const goPrev = useCallback(
    (event?: MouseEvent<HTMLButtonElement> | KeyboardEvent) => {
      event?.preventDefault()
      event?.stopPropagation()
      if (total < 2) return
      setCurrentIndex((prev) => (prev - 1 + total) % total)
    },
    [total]
  )

  const goNext = useCallback(
    (event?: MouseEvent<HTMLButtonElement> | KeyboardEvent) => {
      event?.preventDefault()
      event?.stopPropagation()
      if (total < 2) return
      setCurrentIndex((prev) => (prev + 1) % total)
    },
    [total]
  )

  useEffect(() => {
    if (!isZoomed) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeZoom()
        return
      }
      if (total < 2) return
      if (event.key === 'ArrowLeft') {
        goPrev(event)
      }
      if (event.key === 'ArrowRight') {
        goNext(event)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [closeZoom, goNext, goPrev, isZoomed, total])

  useEffect(() => {
    if (!isZoomed) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isZoomed])

  if (!currentImage?.src) {
    return <img {...imgProps} alt={imgProps.alt ?? ''} />
  }

  const safeSrc = typeof currentImage.src === 'string' ? currentImage.src : undefined
  const safeSrcSet = typeof currentImage.srcSet === 'string' ? currentImage.srcSet : undefined
  const safeSizes = typeof currentImage.sizes === 'string' ? currentImage.sizes : undefined
  const isImageLoaded = loadedSrc === safeSrc
  const modal = isZoomed && safeSrc && typeof document !== 'undefined'
    ? createPortal(
        <div className="zoom-gallery" role="dialog" aria-modal="true">
          <button
            type="button"
            className="zoom-gallery__backdrop"
            aria-label="Close image"
            onClick={closeZoom}
          />
          <button className="zoom-gallery__close" onClick={closeZoom} type="button" aria-label="Close image">
            <span aria-hidden="true">x</span>
          </button>
          {total > 1 ? (
            <>
              <button className="zoom-gallery__nav zoom-gallery__nav--prev" onClick={goPrev} type="button" aria-label="Previous image">
                <span aria-hidden="true">{'<'}</span>
              </button>
              <button className="zoom-gallery__nav zoom-gallery__nav--next" onClick={goNext} type="button" aria-label="Next image">
                <span aria-hidden="true">{'>'}</span>
              </button>
              <div className="zoom-gallery__counter" aria-live="polite">
                {currentIndex + 1} / {total}
              </div>
            </>
          ) : null}
          <img
            key={safeSrc}
            alt={currentImage.alt ?? imgProps.alt ?? ''}
            className="zoom-gallery__image"
            data-loaded={isImageLoaded ? 'true' : 'false'}
            decoding={currentImage.decoding ?? imgProps.decoding}
            draggable={false}
            height={currentImage.height}
            loading="eager"
            onClick={closeZoom}
            onLoad={() => setLoadedSrc(safeSrc)}
            referrerPolicy={currentImage.referrerPolicy ?? imgProps.referrerPolicy}
            sizes={safeSizes}
            src={safeSrc}
            srcSet={safeSrcSet}
            title={currentImage.title ?? imgProps.title}
            width={currentImage.width}
          />
        </div>,
        document.body
      )
    : null

  return (
    <>
      <img
        {...imgProps}
        alt={imgProps.alt ?? ''}
        onClick={openZoom}
        onKeyDown={handlePreviewKeyDown}
        role="button"
        tabIndex={0}
      />
      {modal}
    </>
  )
}
