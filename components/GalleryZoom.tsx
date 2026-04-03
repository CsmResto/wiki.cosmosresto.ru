import { cloneElement, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ImgHTMLAttributes, MouseEvent, ReactElement, SyntheticEvent } from 'react'
import Zoom from 'react-medium-image-zoom'

type GalleryImage = ImgHTMLAttributes<HTMLImageElement>

type GalleryZoomImageProps = {
  images: GalleryImage[]
  index: number
  imgProps: ImgHTMLAttributes<HTMLImageElement>
}

export function GalleryZoomImage({ images, index, imgProps }: GalleryZoomImageProps) {
  const [currentIndex, setCurrentIndex] = useState(index)
  const [isZoomed, setIsZoomed] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const total = images.length
  const currentImage = useMemo(() => images[currentIndex] ?? images[index], [currentIndex, images, index])

  useEffect(() => {
    setIsImageLoaded(false)
  }, [currentIndex])

  const handleZoomChange = useCallback(
    (value: boolean) => {
      setIsZoomed(value)
      if (value) {
        setCurrentIndex(index)
      }
    },
    [index]
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
    if (!isZoomed || total < 2) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goPrev(event)
      }
      if (event.key === 'ArrowRight') {
        goNext(event)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev, isZoomed, total])

  const ZoomContent = useCallback(
    ({
      buttonUnzoom,
      img,
      onUnzoom,
    }: {
      buttonUnzoom: ReactElement<HTMLButtonElement>
      img: ReactElement | null
      onUnzoom: (event: Event) => void
    }) => {
      if (!currentImage?.src || !img) {
        return <>{buttonUnzoom}</>
      }

      const imgProps = img.props as ImgHTMLAttributes<HTMLImageElement>
      const className = [imgProps.className, 'zoom-gallery__image'].filter(Boolean).join(' ')
      const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
        imgProps.onLoad?.(event)
        setIsImageLoaded(true)
      }

      const safeSrc = typeof currentImage.src === 'string' ? currentImage.src : imgProps.src
      const safeSrcSet = typeof currentImage.srcSet === 'string' ? currentImage.srcSet : imgProps.srcSet
      const safeSizes = typeof currentImage.sizes === 'string' ? currentImage.sizes : imgProps.sizes

      const modalImg = img.type === 'img'
        ? cloneElement(img as ReactElement<any>, {
            alt: currentImage.alt ?? imgProps.alt,
            sizes: safeSizes,
            src: safeSrc,
            srcSet: safeSrcSet,
            className,
            'data-loaded': isImageLoaded ? 'true' : 'false',
            onLoad: handleLoad,
            draggable: false,
          })
        : img

      return (
        <div className="zoom-gallery">
          <button
            type="button"
            className="zoom-gallery__backdrop"
            aria-label="Close image"
            onClick={(event) => onUnzoom(event.nativeEvent)}
          />
          {buttonUnzoom}
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
          {modalImg}
        </div>
      )
    },
    [currentImage, currentIndex, goNext, goPrev, isImageLoaded, total]
  )

  return (
    <Zoom ZoomContent={ZoomContent} onZoomChange={handleZoomChange}>
      <img {...imgProps} />
    </Zoom>
  )
}
