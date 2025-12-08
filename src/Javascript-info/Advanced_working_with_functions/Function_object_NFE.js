// 1. The name Property
function sayHi() {}
console.log(sayHi.name);  // "sayHi"

// Even anonymous functions try to get a name automatically:
let fun = function() {};
console.log(fun.name);  // "fun" (taken from the variable)

// Arrow functions also get automatic names:
let greet = () => {};
console.log(greet.name);  // "greet"


// 2. The length Property
function f(a, b, c) {}
console.log(f.length); // 3

// If a function uses rest parameters, they are not counted:
function sum(...nums) {}
console.log(sum.length);  // 0


// 3.Custom Properties
function counter() {
  return counter.count++;
}

counter.count = 0;

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2


// 4. Named Function Expression (NFE)
let greett = function welcome() {
  console.log("Hello");
};


// Why do we use func? Maybe just use sayHi for the nested call?
// Actually, in most cases we can:

let sayHi = function(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHi("Guest");
  }
};


// If someone overwrites the variable:
let copy = sayHi;
sayHi = null;

copy(); // Still works because func() exists internally