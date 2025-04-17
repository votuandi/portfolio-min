/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/next-script-for-ga */
import { Children } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import theme from '@/assets/theme'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />

          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" {...({ crossOrigin: 'anonymous' } as React.LinkHTMLAttributes<HTMLLinkElement>)}></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&family=Dancing+Script:wght@400..700&family=Itim&family=Merienda:wght@300..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Quicksand:wght@300..700&display=swap"
            rel="stylesheet"
          ></link>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-HCENFPBJ0F"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage

  /* eslint-disable */
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) => (props) => <App {...props} />,
    })
  /* eslint-enable */

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...Children.toArray(initialProps.styles)],
  }
}
