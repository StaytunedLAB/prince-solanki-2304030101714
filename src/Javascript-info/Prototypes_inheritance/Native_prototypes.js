// Object.prototype
let obj = {};
console.log(obj.toString());    // "[object Object]"

console.log(obj.__proto__ === Object.prototype);  // true


// Other Built-In Prototypes
let arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype);           // true
console.log(arr.__proto__.__proto__ === Object.prototype); // true


// Primitives
alert("hello".toUpperCase());  // works even though "hello" is a primitive


// Changing Native Prototypes
String.prototype.show = function() {
  alert(this);
};

"HELLO".show();  // HELLO

// Example polyfill pattern:
if (!String.prototype.repeat) {
  String.prototype.repeat = function(n) {
    return new Array(n + 1).join(this);
  };
}

alert("La".repeat(3)); // LaLaLa


// Borrowing From Prototypes
let obj1 = {
  0: "Hello",
  1: "world!",
  length: 2
};

obj.join = Array.prototype.join;

console.log(obj.join(", "));  // "Hello, world!"
