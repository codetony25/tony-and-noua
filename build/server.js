import path from 'path';
import childProcess from 'child_process';
import _debug from 'debug';
import webpackConfig from './webpack.config';

const debug = _debug('root/build/runServer.js');

// Should match the text string used in `src/server.js/server.listen(...)`
const RUNNING_REGEXP = /The server is running at http:\/\/(.*?)\//;

let server;
const { output } = webpackConfig.find(obj => obj.target === 'node');
const serverPath = path.join(output.path, output.filename);

// Launch or restart the Node.js server
export default function runServer (callback) {
  debug('Initiating Run Server Task');
  let isCallbackPending = !!callback;

  function onStdOut (data) {
    const time = new Date().toTimeString();
    const match = data.toString('utf8').match(RUNNING_REGEXP);

    process.stdout.write(time.replace(/.*(\d{2}:\d{2}:\d{2}).*/, '[$1] '));
    process.stdout.write(data);

    if (match) {
      server.stdout.removeListener('data', onStdOut);
      server.stdout.on('data', value => process.stdout.write(value));
      if (callback) {
        isCallbackPending = false;

        callback(null, match[1]);
      }
    }
  }

  if (server) {
    server.kill('SIGTERM');
  }

  server = childProcess.spawn('node', [serverPath], {
    env: Object.assign({ NODE_ENV: 'development' }, process.env),
    silent: false
  });

  if (isCallbackPending) {
    server.once('exit', (code, signal) => {
      if (isCallbackPending) {
        throw new Error(
          `Server terminated unexpectedly 
           with code: ${code} signal: ${signal}`
        );
      }
    });
  }

  server.stdout.on('data', onStdOut);
  server.stderr.on('data', value => process.stderr.write(value));

  return server;
}

process.on('exit', () => {
  if (server) {
    server.kill('SIGTERM');
  }
});
