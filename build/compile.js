import Promise from 'bluebird';
import run from './run';
import packageJson from '../package.json';
import webpack from 'webpack';
import webpackConfig from './webpack.config';
import _debug from 'debug';
import { clean } from './shared/helpers';
import fs from './shared/fs';
import runServer from './server';
import fetch from 'node-fetch';
import { host } from '../src/config';
import config from './shared/config';

const debug = _debug('root/build/compile.js');

export async function renderStatic () {
  debug('Initiating Render Task');

  let server;

  await new Promise(resolve => server = runServer(resolve));

  await config.routes.reduce((promise, route) =>
    promise.then(async () => {
      const url = `http://${host}${route}`;
      const directory = `dist/public${route.replace(/[^\/]*$/, '')}`;
      const name = route.endsWith('/') ?
        'index.html' : `${route.match(/[^/]+$/)[0]}.html`;
      const dist = `${directory}${name}`;
      const response = await fetch(url);
      const text = await response.text();
      await fs.makeDir(directory);
      await fs.writeFile(dist, text);
      debug(`${dist} => ${response.status} ${response.statusText}`);
    }
  ), Promise.resolve());

  server.kill('SIGTERM');
}


/**
 * Copies all static files such as robots.txt, favicon.ico for example and
 * outputs them to the `dist` folder.
 */
export async function copyStatic ({ isWatch } = {}) {
  debug('Initiating Copy Static Task');

  // Asynchronous recursively file copy
  const copyFile = Promise.promisify(require('ncp'));

  // Copy public and content to the build folder
  await Promise.all([
    copyFile('src/public', 'dist/public')
  ]);

  /**
   * Copy dependencies and leave out the devDependencies for
   * our root package.json to the build folder
   */
  const whitespaceNumber = 2;
  await fs.writeFile('./dist/package.json', JSON.stringify({
    private: true,
    engines: packageJson.engines,
    dependencies: packageJson.dependencies,
    scripts: {
      start: 'node server.js'
    }
  }, null, whitespaceNumber));
}


// Creates application bundles from the source files.
export function bundleStatic () {
  debug('Initiating Bundle Task');

  return new Promise((resolve, reject) => {
    webpack(webpackConfig).run((error, stats) => {
      if (error) {
        return reject(error);
      }

      debug(stats.toString(webpackConfig[0].stats));

      return resolve();
    });
  });
}


/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output `dist` folder.
 */
export default async function build () {
  debug('Initiating Bundle Task');

  if (config.isCleanLifecycle) {
    return await run(clean);
  }
  else if (config.isCompileLifecycle || config.isCompileStaticLifecycle) {
    await run(clean);
  }

  if (config.isCompileCopyStaticLifecycle ||
    config.isCompileLifecycle ||
    config.isCompileStaticLifecycle) {
    await run(copyStatic);
  }

  if (config.isCompileBundleLifecycle ||
    config.isCompileLifecycle ||
    config.isCompileStaticLifecycle) {
    await run(bundleStatic);
  }

  if (config.isCompileStaticLifecycle) {
    await run(renderStatic);
  }
}
