console.log(' ----- 開始（非同期処理） ----- ');

const path    = require('path');
const fs      = require('fs');
const promise = require('promise');

function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, '..', filename), 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFile('alphabet.txt')
  .then(
    (resolve) => {
      console.log(' ***** 読み込み完了 ***** ');
      console.log(resolve);
    }, 
    (reject) => {
      console.log(' ***** エラー発生 ***** ')
  	  console.log(reject)
    }
  );

readFile('no.txt')
  .then(
    (resolve) => {
      console.log(' ***** 読み込み完了 ***** ');
      console.log(resolve);
    }, 
    (reject) => {
      console.log(' ***** エラー発生 ***** ')
      console.log(reject)
    }
  );

console.log(' ----- 終了（非同期処理） ----- ');
console.log(' ↓ 非同期処理のため順番は不規則 ');