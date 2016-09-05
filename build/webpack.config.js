import path from 'path';
import webpack from 'webpack';
import extend from 'extend';
import AssetsPlugin from 'assets-webpack-plugin';
import _debug from 'debug';
import config from './shared/config';

const debug = _debug('root/build/webpack.config.js');

/**
 * Common configuration chunk to be used for both
 * client-side (client.js) and server-side (server.js) bundles
 */
debug('Initiating Webpack Config Task');
const webpackConfig = {
  context: path.resolve(__dirname, '../src'),
  output: {
    path: path.resolve(__dirname, '../dist/public/assets'),
    publicPath: '/assets/',
    sourcePrefix: '  '
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, '../node_modules/react-routing/src'),
          path.resolve(__dirname, '../src')
        ],
        query: {
          // https://github.com/babel/babel-loader#options
          cacheDirectory: config.__DEV__,
          // https://babeljs.io/docs/usage/options/
          babelrc: false,
          presets: [
            'react',
            'es2015',
            'stage-0'
          ],
          plugins: [
            'transform-runtime',
            'transform-decorators-legacy',
            ...config.__DEV__ ? [] : [
              'transform-react-remove-prop-types',
              'transform-react-constant-elements',
              'transform-react-inline-elements'
            ]
          ]
        }
      },
      {
        test: /\.css/,
        loaders: [
          'isomorphic-style-loader',
          `css-loader?${JSON.stringify({
            sourceMap: config.__DEV__,
            // CSS Modules https://github.com/css-modules/css-modules
            modules: true,
            localIdentName: config.__DEV__ ?
              '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
            // CSS Nano http://cssnano.co/options/
            minimize: !config.__DEV__
          })}`,
          'postcss-loader?pack=default'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'isomorphic-style-loader',
          `css-loader?${JSON.stringify({
            sourceMap: config.__DEV__,
            minimize: !config.__DEV__
          })}`,
          'postcss-loader?pack=sass',
          'sass-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          name: config.__DEV__ ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
          limit: 10000
        }
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
        query: {
          name: config.__DEV__ ? '[path][name].[ext]?[hash]' : '[hash].[ext]'
        }
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname, '../src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
  },
  cache: config.__DEV__,
  debug: config.__DEV__,
  stats: {
    colors: true,
    reasons: config.__DEV__,
    hash: config.isVerboseFlag,
    version: config.isVerboseFlag,
    timings: true,
    chunks: config.isVerboseFlag,
    chunkModules: config.isVerboseFlag,
    cached: config.isVerboseFlag,
    cachedAssets: config.isVerboseFlag
  },
  postcss (bundler) {
    return {
      default: [
        require('postcss-import')({ addDependencyTo: bundler }),
        require('postcss-custom-properties')(),
        require('postcss-custom-media')(),
        require('postcss-media-minmax')(),
        require('postcss-custom-selectors')(),
        require('postcss-calc')(),
        require('postcss-nesting')(),
        require('postcss-color-function')(),
        require('pleeease-filters')(),
        require('pixrem')(),
        require('postcss-selector-matches')(),
        require('postcss-selector-not')(),
        require('postcss-flexbugs-fixes')(),
        require('autoprefixer')({ browsers: config.autoprefixerBrowsers })
      ],
      sass: [
        require('autoprefixer')({ browsers: config.autoprefixerBrowsers })
      ]
    };
  }
};

// Configuration for the client-side bundle (client.js)
const clientConfig = extend(true, {}, webpackConfig, {
  entry: './client.js',
  output: {
    filename: config.__DEV__ ?
      '[name].js?[chunkhash]' : '[name].[chunkhash].js',
    chunkFilename: config.__DEV__ ?
      '[name].[id].js?[chunkhash]' : '[name].[id].[chunkhash].js'
  },
  target: 'web',
  plugins: [

    /**
     * Define free variables
     * https://webpack.github.io/docs/list-of-plugins.html#defineplugin
     */
    new webpack.DefinePlugin({
      ...config.globals,
      'process.env.BROWSER': true
    }),

    /**
     * Emit a file with assets paths
     * https://github.com/sporto/assets-webpack-plugin#options
     */
    new AssetsPlugin({
      path: path.resolve(__dirname, '../dist'),
      filename: 'assets.js',
      processOutput: assets => `module.exports = ${JSON.stringify(assets)};`
    }),

    /**
     * Assign the module and chunk ids by occurrence count
     * Consistent ordering of modules required if using any
     * hashing ([hash] or [chunkhash]) More information:
     * https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
     */
    new webpack.optimize.OccurrenceOrderPlugin(true),
    ...config.__DEV__ ? [] : [

      /**
       * Search for equal or similar files and deduplicate them in the output
       * https://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
       */
      new webpack.optimize.DedupePlugin(),

      /**
       * Minimize all JavaScript output of chunks
       * https://github.com/mishoo/UglifyJS2#compressor-options
       */
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: config.isVerboseFlag
        }
      }),

      /**
       * A plugin for a more aggressive chunk merging strategy
       * https://webpack.github.io/docs/list-of-plugins.html#aggressivemergingplugin
       */
      new webpack.optimize.AggressiveMergingPlugin()
    ]
  ],

  /**
   * Developer tool to enhance debugging
   * http://webpack.github.io/docs/configuration.html#devtool
   */
  devtool: config.__DEV__ ? 'cheap-module-eval-source-map' : false
});

// Configuration for the server-side bundle (server.js)
const serverConfig = extend(true, {}, webpackConfig, {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js',
    chunkFilename: 'server.[name].js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: [
    /^\.\/assets$/,
    function filter (context, request, callback) {
      const isExternal = request
          .match(/^[@a-z][a-z\/\.\-0-9]*$/i) &&
        !request.match(/^react-routing/) &&
        !context.match(/[\\/]react-routing/);
      callback(null, Boolean(isExternal));
    }
  ],
  plugins: [

    /**
     * Define free variables
     * https://webpack.github.io/docs/list-of-plugins.html#defineplugin
     */
    new webpack.DefinePlugin({
      ...config.globals,
      'process.env.BROWSER': false
    }),

    /**
     * Adds a banner to the top of each generated chunk
     * https://webpack.github.io/docs/list-of-plugins.html#bannerplugin
     */
    new webpack.BannerPlugin('require("source-map-support").install();',
      { raw: true, entryOnly: false })
  ],

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },

  devtool: 'source-map'
});

export default [clientConfig, serverConfig];
