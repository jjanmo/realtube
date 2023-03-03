import { withScreen } from '@hoc/withScreen'
import GlobalStyles from '@styles/GlobalStyles'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nodebird</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default withScreen(MyApp)
