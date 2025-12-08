// The syntax for creating a function:
let func = new Function ([arg1, arg2, ...argN], functionBody);

let sum = new Function('a', 'b', 'return a + b');
console.log(sum(1, 2)); // 3


// You can also create a no-argument function by giving just the body:
let sayHi = new Function('console.log("Hello")');
sayHi();  // Hello


// Closure
function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); // error: value is not defined


// Compare it with the regular behavior:
function getFunc() {
  let value = "test";

  let func = function() { alert(value); };

  return func;
}

getFunc()(); // "test", from the Lexical Environment of getFunc
