import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/globals.scss'
import 'react-medium-image-zoom/dist/styles.css'

export default function App({ Component, pageProps }: AppProps) {
  const { basePath } = useRouter()

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
