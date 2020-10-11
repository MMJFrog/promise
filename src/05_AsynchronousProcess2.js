console.log(' ----- 開始（非同期処理） ----- ');

const path = require('path');
const fs   = require('fs');

fs.readFile(path.join(__dirname, '..', 'number.txt'), 'utf-8', (err, data) => {
  if (err) {
  	throw err;
  }
  console.log(' Done (read number.txt) ');
  // console.log(data);
})

fs.readFile(path.join(__dirname, '..', 'alphabet.txt'), 'utf-8', (err, data) => {
  if (err) {
  	throw err;
  }
  console.log(' Done (read alphabet.txt) ');
  // console.log(data);
})

console.log(' ----- 終了（非同期処理） ----- ');

console.log(' ↓ 非同期処理のため順番は不規則 ');