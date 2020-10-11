console.log(' ----- 開始（１つ） ----- ');
console.log(' 今のChromeのバージョンでは未対応 ');

const path    = require('path');
const fs      = require('fs');
const promise = require('promise');

function readFile(filename) {
  return new promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, '..', filename), 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(filename);
      }
    });
  });
}

function finish() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(' ----- 終了（１つ） ----- ');
    }, 1);
  });
}

promise.any([readFile('alphabet.txt'), readFile('number.txt'), readFile('no.txt')])
  .then(
    (resolve) => {
      console.log(' Done (read', resolve, ') ');
      return finish();
    }
  ).then(
    (resolve) => {
      console.log(resolve);
    }
  ).catch(
    (err) => {
      console.log(err);
    }
  );
