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
          <link
            rel="shortcut icon"
            href="/static/favicon-32.png"
            sizes="32x32"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="228x228"
            href="/static/favicon-228.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="195x195"
            href="/static/favicon-195.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="/static/favicon-152.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="/static/favicon-144.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="128x128"
            href="/static/favicon-128.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="/static/favicon-120.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="96x96"
            href="/static/favicon-96.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="/static/favicon-72.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            href="/static/favicon-57.png"
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
