console.log(' ----- 開始（同期処理） ----- ');

function sleep(milliSeconds) {
  const startTime = new Date().getTime();
  while (new Date().getTime() < startTime + milliSeconds);
  console.log(' ３秒経ちました ');
}

sleep(3000);

console.log(' ----- 終了（同期処理） ----- ');