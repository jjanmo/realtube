import { withScreen } from '@hoc/withScreen'
import useResponsiveHeight from '@hooks/useResponsiveHeight'
import GlobalStyles from '@styles/GlobalStyles'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  useResponsiveHeight()

  return (
    <>
      <Head>
        <title>RealTube</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default withScreen(MyApp)
