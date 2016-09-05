import Browsersync from 'browser-sync';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import run from './run';
import runServer from './server';
import webpackConfig from './webpack.config';
import { copyStatic } from './compile';
import config from './shared/config';
import { clean } from './shared/helpers';
import _debug from 'debug';

const debug = _debug('root/build/start.js');

/**
 * Launches a development web server with "live reload" functionality -
 * synchronizing URLs, interactions and code changes across multiple devices.
 */
export default async function start () {
  debug('Initiating Start Task');

  await run(clean);
  await run(copyStatic.bind(null, { isWatch: true }));

  // Start Webpack Configurations
  await new Promise(resolve => {

    /**
     * Patch the client-side bundle configurations
     * to enable Hot Module Replacement (HMR) and React Transform
     */
    webpackConfig.filter(obj => obj.target !== 'node').forEach(config => {
      config.entry = ['webpack-hot-middleware/client'].concat(config.entry);
      config.output.filename =
        config.output.filename.replace('[chunkhash]', '[hash]');
      config.output.chunkFilename =
        config.output.chunkFilename.replace('[chunkhash]', '[hash]');
      config.plugins.push(new webpack.HotModuleReplacementPlugin());
      config.plugins.push(new webpack.NoErrorsPlugin());
      config
        .module
        .loaders
        .filter(obj => obj.loader === 'babel-loader')
        .forEach(obj => obj.query = {
          ...obj.query,

          /**
           * Wraps all React components into arbitrary transforms
           * https://github.com/gaearon/babel-plugin-react-transform
           */
          plugins: [
            ...(obj.query ? obj.query.plugins : []),
            ['react-transform', {
              transforms: [
                {
                  transform: 'react-transform-hmr',
                  imports: ['react'],
                  locals: ['module']
                }, {
                  transform: 'react-transform-catch-errors',
                  imports: ['react', 'redbox-react']
                }
              ]
            }
            ]
          ]
        });
    });

    const bundler = webpack(webpackConfig);
    const wpMiddleware = webpackMiddleware(bundler, {

      /**
       * IMPORTANT: webpack middleware can't access config,
       * so we should provide publicPath by ourselves
       *
       * More webpack settings can be seen at:
       * https://webpack.github.io/docs/webpack-dev-middleware
       */
      publicPath: webpackConfig[0].output.publicPath,
      stats: webpackConfig[0].stats
    });

    const hotMiddlewares =
      bundler
      .compilers
      .filter(compiler => compiler.options.target !== 'node')
      .map(compiler => webpackHotMiddleware(compiler));

    let handleServerBundleComplete = () => {
      runServer((error, host) => {
        if (!error) {
          const handleBroswerSync = Browsersync.create();
          handleBroswerSync.init({
            ...(config.__PROD__ === false ? {} : { notify: false, ui: false }),

            proxy: {
              target: host,
              middleware: [wpMiddleware, ...hotMiddlewares]
            }
          }, resolve);
          handleServerBundleComplete = runServer;
        }
      });
    };

    bundler.plugin('done', () => handleServerBundleComplete());
  });

}
