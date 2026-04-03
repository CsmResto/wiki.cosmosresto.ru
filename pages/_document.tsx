import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('wiki-theme');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    var theme = (stored === 'light' || stored === 'dark') ? stored : (prefersLight ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
