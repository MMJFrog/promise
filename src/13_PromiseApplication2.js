console.log(' ----- 開始（最初） ----- ');

const fs = require('fs');
const promise = require('promise');

function readFile(filename) {
  return new promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
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
      resolve(' ----- 終了（最初） ----- ');
    }, 1);
  });
}

promise.race([readFile('alphabet.txt'), readFile('number.txt')])
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
