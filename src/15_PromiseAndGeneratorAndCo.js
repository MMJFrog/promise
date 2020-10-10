console.log(' ----- 開始（同期） ----- ');

const fs = require('fs');
const promise = require('promise');
const co = require('co');

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
      resolve(' ----- 終了（同期） ----- ');
    }, 1);
  });
}

co(function* () {
  const res1 = yield readFile('alphabet.txt');
  console.log(res1);

  const res2 = yield readFile('number.txt');
  console.log(res2);

  const res3 = yield finish();
  console.log(res3);
});