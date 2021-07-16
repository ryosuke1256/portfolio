import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="ja-JP" dir="ltr">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#3f4445" />
          <link rel="shortcut icon" sizes="image/x-icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="192x192" href="/images/cat192-apple.png" />
          <link rel="icon" type="image/png" href="/images/cat192-android.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
