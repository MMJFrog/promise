console.log(' ----- 開始（同期処理） ----- ');
console.log(' ↓ 同期処理のため順番は固定（終了：略） ');

const fs = require('fs');

fs.readFile('number.txt', 'utf-8', function(err, data){
  if (err) {
  	throw err;
  }
  console.log(' Done (read number.txt) ');
  // console.log(data);

  fs.readFile('alphabet.txt', 'utf-8', function(err, data){
  	if (err) {
      throw err;
    }
    console.log(' Done (read alphabet.txt) ');
    // console.log(data);
  });
});