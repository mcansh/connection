import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class Page extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Connection</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, viewport-fit=cover"
          />
          <meta
            name="description"
            content="Get your computers network speed 🚀"
          />
        </Head>
        <style jsx global>{`
          @import url(https://mcan.sh/assets/fonts/Gotham/gotham.css);
          * {
            margin: 0;
            box-sizing: border-box;
            font-weight: 300;
          }
          body {
            min-height: 100vh;
            font-family: 'Gotham Pro';
          }
        `}</style>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default Page;
