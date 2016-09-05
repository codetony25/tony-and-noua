import _debug from 'debug';

const debug = _debug('root/build/run.js');

// Runs the build information
export default function run (fn, options) {
  const task = typeof fn.default === 'undefined' ? fn : fn.default;

  debug(`Starting '${task.name}${options ? `(${options})` : ''}' Started in`);

  return task(options).then(resolution => {
    debug(
      `Finished '${task.name}${options ? `(${options})` : ''}' Finished in`
    );

    return resolution;
  });
}

const maxArgumentLength = 2;

if (require.main === module && process.argv.length > maxArgumentLength) {
  Reflect.deleteProperty(require.cache, __filename);

  const module = require(`./${process.argv[2]}.js`).default;

  run(module).catch(error => {
    debug(error.stack);
    process.exit(1);
  });
}
