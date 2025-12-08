// “var” has NO block scope
if (true) {
    var test = "hello";
}
console.log(test); // "hello"

// let & const
if (true) {
    let x = 5;
}
console.log(x); // Error: x is not defined


// “var” tolerates redeclarations
var message = "Hi";
var message = "Hello again";
console.log(message); // "Hello again"

// But with let:
let message = "Hi";
let message = "Hello"; // Error


// “var” variables can be declared BELOW their use
console.log(name); // undefined
var name = "John";

var name;        // declaration moved (hoisted)
console.log(name); // undefined
name = "John";   // assignment stays here

// But with let/const:
console.log(age); // Error: Cannot access before initialization
let age = 20;


// IIFE – Immediately Invoked Function Expression
(function() {
  var message = "Hello";
  console.log(message);
})(); // The function runs immediately.

console.log(message); // ❌ Error

(function() {
  var counter = 0;
  // counter is private here
})();


// Ways to create IIFE
(function() {
  alert("Parentheses around the function");
})();

(function() {
  alert("Parentheses around the whole thing");
}());

!function() {
  alert("Bitwise NOT operator starts the expression");
}();

+function() {
  alert("Unary plus starts the expression");
}();