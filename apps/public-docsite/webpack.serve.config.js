// @ts-check

const resources = require('../../scripts/webpack/webpack-resources');
const webpack = require('webpack');
//const { remoteExternal } = require('@lading/webpack');
//const getResolveAlias = require('../../scripts/webpack/getResolveAlias');
const { addMonacoWebpackConfig } = require('@fluentui/react-monaco-editor/scripts/addMonacoWebpackConfig');

const entryPointName = 'fabric-sitev5';

module.exports = resources.createServeConfig(
  addMonacoWebpackConfig({
    entry: {
      [entryPointName]: './src/index.ts',
    },

    output: {
      chunkFilename: `${entryPointName}-[name].js`,
    },

    // The website config intentionally doesn't have React as an external because we bundle it
    // to ensure we get a consistent version.

    optimization: {
      removeAvailableModules: false,
    },

    mode: 'development',

    plugins: [
      new webpack.DefinePlugin({
        process: JSON.stringify({
          env: {
            NODE_ENV: 'development',
          },
          argv: [],
        }),
      }),
      // new webpack.container.ModuleFederationPlugin({
      //   remotes: {
      //     '@fluentui/react': remoteExternal('fluentuiReact'),
      //   },
      //   shared: {
      //     react: { singleton: true },
      //     'react-dom': { singleton: true },
      //   },
      // }),
    ],

    resolve: {
      alias: {},
    },
  }),
  'dist',
);
