import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import 'react-medium-image-zoom/dist/styles.css'
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  const { basePath } = useRouter()

  useEffect(() => {
    const root = document.documentElement
    const setViewportVars = () => {
      const vv = window.visualViewport
      const vh = (vv?.height ?? window.innerHeight) * 0.01

      root.style.setProperty('--rmiz-vh', `${vh}px`)
    }

    setViewportVars()
    window.addEventListener('resize', setViewportVars)
    window.addEventListener('orientationchange', setViewportVars)
    window.visualViewport?.addEventListener('resize', setViewportVars)
    window.visualViewport?.addEventListener('scroll', setViewportVars)

    return () => {
      window.removeEventListener('resize', setViewportVars)
      window.removeEventListener('orientationchange', setViewportVars)
      window.visualViewport?.removeEventListener('resize', setViewportVars)
      window.visualViewport?.removeEventListener('scroll', setViewportVars)
    }
  }, [])

  useEffect(() => {
    const handleWheelCapture = (event: WheelEvent) => {
      const modal = document.querySelector('[data-rmiz-modal][open]')
      if (!modal) return
      event.preventDefault()
      event.stopImmediatePropagation()
    }

    window.addEventListener('wheel', handleWheelCapture, { capture: true, passive: false })
    return () => window.removeEventListener('wheel', handleWheelCapture, { capture: true } as AddEventListenerOptions)
  }, [])

  return (
    <>
      <Head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
