import React from 'react';
import App, { Container } from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
  // $FlowFixMe
  static getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
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
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
