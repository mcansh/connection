import React from 'react';
import App, { Container } from 'next/app';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import { IntlProvider, addLocaleData } from 'react-intl';
import { StyledLink } from '../components/Type';

const ExtendedStyledLink = styled(StyledLink)`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 2rem;
  font-size: 1.6rem;
`;

// Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.
if (typeof window !== 'undefined' && window.ReactIntlLocaleData) {
  Object.keys(window.ReactIntlLocaleData).forEach(lang => {
    addLocaleData(window.ReactIntlLocaleData[lang]);
  });
}

const GlobalStyles = createGlobalStyle`
  @import url('https://mcan.sh/assets/fonts/Gotham/gotham.css');

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    box-sizing: inherit;
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
    margin: 0;
  }
`;

class MyApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req } = ctx;
    const { locale, messages } = req || window.__NEXT_DATA__.props;

    return { pageProps, locale, messages };
  };

  componentDidMount = () => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
          console.log('service worker registration successful');
        })
        .catch(err => {
          console.warn('service worker registration failed', err);
        });
    }
  };

  render() {
    const { Component, pageProps, locale, messages } = this.props;
    const now = Date.now();

    return (
      <Container>
        <IntlProvider locale={locale} messages={messages} initialNow={now}>
          <>
            <GlobalStyles />
            <Component {...pageProps} />
            <Link href="https://github.com/mcansh/connection" passHref>
              <ExtendedStyledLink target="_blank">src</ExtendedStyledLink>
            </Link>
          </>
        </IntlProvider>
      </Container>
    );
  }
}

export default MyApp;
