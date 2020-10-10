console.log(' ----- 開始（両方） ----- ');

const fs = require('fs');
const promise = require('promise');

function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function finish() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(' ----- 終了（両方） ----- ');
    }, 1);
  });
}

promise.all([readFile('alphabet.txt'), readFile('number.txt')])
  .then(
    ([data1, data2]) => {
      console.log(' Done (read alphabet.txt and number.txt) ')
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
