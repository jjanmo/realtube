import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <body>
          <Head></Head>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
