console.log(' ----- 開始（同期処理） ----- ');

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
      resolve(' ----- 終了（同期処理） ----- ');
    }, 1);
  });
}

readFile('alphabet.txt')
  .then(
    (resolve) => {
      console.log(' Done (read alphabet.txt) ');
      // console.log(resolve);
      return readFile('number.txt');
    }
  ).then( 
    (resolve) => {
      console.log(' Done (read number.txt) ');
      // console.log(resolve);
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
