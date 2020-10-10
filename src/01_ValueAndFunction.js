function add1(a, b) {
  return a + b;
}
console.log(' ----- add1(1, 2) ----- ');
console.log('>\t', add1(1, 2));

const addFunc1 = function(a, b) {
  return a + b;
}
console.log(' ----- addFunc1(1, 2) ----- ');
console.log('>\t', addFunc1(1, 2));

function add2(a, b) {
  return a + b;
}
console.log(' ----- add2(1, 2) ----- ');
console.log('>\t', add2(1, 2));

const addFunc2 = add2;
console.log(' ----- addFunc2(1, 2) ----- ');
console.log('>\t', addFunc2(1, 2));