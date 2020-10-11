console.log(' ----- 開始（同期処理） ----- ');
console.log(' ↓ 同期処理のため順番は固定（終了：略） ');

const path = require('path');
const fs   = require('fs');

fs.readFile(path.join(__dirname, '..', 'number.txt'), 'utf-8', function(err, data){
  if (err) {
  	throw err;
  }
  console.log(' Done (read number.txt) ');
  // console.log(data);

  fs.readFile(path.join(__dirname, '..', 'alphabet.txt'), 'utf-8', function(err, data){
  	if (err) {
      throw err;
    }
    console.log(' Done (read alphabet.txt) ');
    // console.log(data);
  });
});