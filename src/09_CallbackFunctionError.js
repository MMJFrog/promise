console.log(' ----- コールバック関数のcatch処理 ----- ');

const path = require('path');
const fs   = require('fs');

try {
  fs.readFile(path.join(__dirname, '..', 'number.txt'), 'utf-8', (err, data) => {
    if (err) {
    	throw err;
    }
    console.log(' Done (read number.txt) ');
    // console.log(data);

    fs.readFile(path.join(__dirname, '..', 'alphabet.txt'), 'utf-8', (err, data) => {
    	if (err) {
        throw err;
      }
      console.log(' Done (read alphabet.txt) ');
      // console.log(data);

      fs.readFile(path.join(__dirname, 'no.txt'), 'utf-8', (err, data) => {
        if (err) {
          throw err;
        }

      });
    });
  });

} catch(err) {
  console.log(' エラーが検出されました '); // <= 例外処理が通らない
}