/* eslint-disable @typescript-eslint/no-empty-object-type */
import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { commonConfig } from '@/utils/configs'
import { DefaultSeo } from 'next-seo'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '@/assets/theme/theme.default'
import { Provider } from 'react-redux'
import store from '@/store'
// import useAuth from '@/hooks/useAuth'
// import { getSettings } from '@/store/setting/setting.action'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, pageProps: P) => ReactNode
}

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout
}

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  // useAuth()
  const {
    Component,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    pageProps: { session, ...pageProps },
  } = props

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <DefaultSeo
        defaultTitle={commonConfig.DOCUMENT_TITLE}
        titleTemplate={`%s | ${commonConfig.DOCUMENT_TITLE}`}
        openGraph={{
          type: 'website',
          // url: "",
          siteName: commonConfig.DOCUMENT_TITLE,
        }}
      />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />, pageProps)}
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
