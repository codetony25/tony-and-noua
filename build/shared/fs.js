import fs from 'fs';
import mkdirp from 'mkdirp';

const writeFile = (file, contents) => new Promise((resolve, reject) => {
  fs.writeFile(
    file, contents, 'utf8',
    (error) => {
      if (error) {
        return reject(error);
      }
      else {
        return resolve();
      }
    }
  );
});

const makeDir = (name) => new Promise((resolve, reject) => {
  mkdirp(
    name,
    (error) => {
      if (error) {
        return reject(error);
      }
      else {
        return resolve();
      }
    }
  );
});

export default { writeFile, makeDir };
