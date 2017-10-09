import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class Page extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }
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
            box-sizing: border-box;
            font-weight: 300;
          }
          body {
            min-height: 100vh;
            font-family: 'Gotham Pro';
            background: #222;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 1.35;
            text-align: center;
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
