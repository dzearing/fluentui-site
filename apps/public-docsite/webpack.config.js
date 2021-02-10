const webpack = require('webpack');
const version = require('./package.json').version;
const entryPointName = 'fabric-sitev5';
const now = Date.now();
const mode = 'production';

module.exports = {
  mode,
  cache: false,
  entry: {
    [entryPointName]: './lib/index.js',
  },
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].js',
    pathinfo: false,
    globalObject: 'self',
    chunkFilename: `${entryPointName}-${version}-[name]-${now}.js`,
  },
  plugins: [
    new webpack.DefinePlugin({
      process: JSON.stringify({
        env: {
          NODE_ENV: mode,
        },
        argv: [],
      }),
    }),
  ],
};
