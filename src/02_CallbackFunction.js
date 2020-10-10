function doTwice(func) {
  func();
  func();
}

function hello() {
  console.log('>\t', 'Hello1');
}

console.log(' ----- doTwice(hello) ----- ');
doTwice(hello);

console.log(' ----- doTwice(function() {}) ----- ');
doTwice(function() {
  console.log('>\t', 'Hello2');
});

console.log(' ----- doTwice(() => {}) ----- ');
doTwice(() => {
  console.log('>\t', 'Hello3');
});

// **************************************************

function greet1(func) {
  func('Good', 'morning');
}

console.log(' ----- greet1(function(*) {}) ----- ');
greet1(function(word1, word2) {
  console.log('>\t', word1);
  console.log('>\t', word2);
});

function greet2(func) {
  func(console.log, console.log);
}

console.log(' ----- greet2((*) => {}) ----- ');
greet2((func1, func2) => {
  func1('>\t', 'Good');
  func2('>\t', 'enening');
});