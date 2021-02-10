// @ts-check

module.exports = function(env, argv) {
  const webpack = require('webpack');
  const { remoteExternal } = require('@lading/webpack');
  const resources = require('../../scripts/webpack/webpack-resources');
  const getResolveAlias = require('../../scripts/webpack/getResolveAlias');
  const { addMonacoWebpackConfig } = require('@fluentui/react-monaco-editor/scripts/addMonacoWebpackConfig');
  // @ts-ignore
  const version = require('./package.json').version;

  const now = Date.now();

  const entryPointName = 'fabric-sitev5';

  return resources.createConfig(
    entryPointName,
    true,
    addMonacoWebpackConfig({
      entry: {
        [entryPointName]: './lib/index.js',
      },

      optimization: {
        concatenateModules: false,
      },

      output: {
        chunkFilename: `${entryPointName}-${version}-[name]-${now}.js`,
      },

      plugins: [
        new webpack.DefinePlugin({
          process: JSON.stringify({
            env: {
              NODE_ENV: 'development',
            },
            argv: [],
          }),
        }),
        new webpack.container.ModuleFederationPlugin({
          remotes: {
            '@fluentui/react': remoteExternal('fluentuiReact'),
          },
          shared: {
            react: { singleton: true },
            'react-dom': { singleton: true },
          },
        }),
      ],

      resolve: {
        alias: {},
      },

      // The website config intentionally doesn't have React as an external because we bundle it
      // to ensure we get a consistent version.

      // resolve: {
      //   alias: getResolveAlias(true /*useLib*/),
      // },
    }),
    // always build the dev bundle too
    /* only production */ false,
  );
};
