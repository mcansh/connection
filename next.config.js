const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const { name } = require('./package.json');

module.exports = {
  webpack: (config, { dev }) => {
    if (!dev) {
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          cacheId: name,
          filename: 'sw.js',
          minify: true,
          forceDelete: true,
          staticFileGlobs: ['static/**/*'],
          staticFileGlobsIgnorePatterns: [/\.next\//],
          runtimeCaching: [
            {
              handler: 'fastest',
              urlPattern: /[.](webp|png|jpg)/,
            },
            {
              handler: 'networkFirst',
              urlPattern: /^http.*/,
            },
          ],
        })
      );
    }
    return config;
  },
};
