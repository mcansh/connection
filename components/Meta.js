// @flow
import React from 'react';
import Head from 'next/head';
import { description } from '../package.json';

const faviconSizes = [32, 57, 72, 96, 120, 128, 144, 152, 195, 228];

const Meta = () => (
  <Head>
    <title>Connection</title>
    <meta name="description" content={description} />
    <meta charSet="utf-8" />
    <link rel="manifest" href="/static/manifest.json" />
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width, viewport-fit=cover"
    />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    {faviconSizes.map(favicon => (
      <link
        key={favicon}
        rel="apple-touch-icon-precomposed"
        sizes={`${favicon}x${favicon}`}
        href={`/static/favicon-${favicon}.png`}
      />
    ))}
  </Head>
);

export default Meta;
