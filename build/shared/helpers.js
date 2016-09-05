import http from 'http';
import del from 'del';
import fs from './fs';

import _debug from 'debug';

const debug = _debug('root/build/shared/helpers.js');

/**
 * Creates a promise to retrieve data depending on the url
 * that is the argument and returns back the response data.
 */
export default async function fetch (url) {
  return await new Promise((resolve, reject) =>
    http.get(url, response =>
      resolve(response)).on('error', error => reject(error))
  );
}

/**
 * Deletes everything inside the build directory
 * and creates an empty public directory after.
 */
export async function clean () {
  debug('Initiating Clean Build Task');
  await del(['.tmp', 'dist/*', '!dist/.git'], { dot: true });
  await fs.makeDir('dist/public');
}
