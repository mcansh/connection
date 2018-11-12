const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const { name } = require('./package.json');

const copyFile = promisify(fs.copyFile);

module.exports = {
  exportPathMap: async (defaultPathMap, { dev, dir, outDir }) => {
    if (dev) return defaultPathMap;

    await copyFile(join(dir, '.next', 'sw.js'), join(outDir, 'sw.js'));
    return defaultPathMap;
  },
  webpack: config => {
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
    return config;
  },
};
