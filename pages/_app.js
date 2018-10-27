import React from 'react';
import App, { Container } from 'next/app';
import { IntlProvider, addLocaleData } from 'react-intl';

import Page from '../components/Page';

// Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.
if (typeof window !== 'undefined' && window.ReactIntlLocaleData) {
  Object.keys(window.ReactIntlLocaleData).forEach(lang => {
    addLocaleData(window.ReactIntlLocaleData[lang]);
  });
}

class MyApp extends App {
  // $FlowFixMe
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
    if (process.env.NODE_ENV === 'production') {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          // $FlowFixMe
          .register('/sw.js')
          .then(() => {
            console.log('service worker registration successful');
          })
          .catch(err => {
            console.warn('service worker registration failed', err);
          });
      }
    }
  };

  render() {
    const { Component, pageProps, locale, messages } = this.props;
    const now = Date.now();

    return (
      <Container>
        <IntlProvider locale={locale} messages={messages} initialNow={now}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </IntlProvider>
      </Container>
    );
  }
}

export default MyApp;
