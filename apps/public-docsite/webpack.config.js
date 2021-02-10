const webpack = require('webpack');

const { remoteExternal } = require('@lading/webpack');
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
  resolve: {
    // alias: {
    //   'monaco-editor': '@fluentui/monaco-editor',
    //   '@uifabric/monaco-editor$': '/Users/david/git/fluentui-site/packages/monaco-editor/lib/monacoCoreBundle.js',
    // },
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
    // new webpack.container.ModuleFederationPlugin({
    //   remotes: {
    //     '@fluentui/react': remoteExternal('fluentuiReact'),
    //     '@fluentui/merge-styles':
    //       'fluentuiMergeStyles@http://localhost:3000/@fluentui/merge-styles@8.0.0-beta.0/remoteEntry.js',
    //   },
    //   shared: {
    //     react: { singleton: true },
    //     'react-dom': { singleton: true },
    //   },
    // }),
  ],
};
