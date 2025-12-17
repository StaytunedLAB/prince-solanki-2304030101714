// The instanceof operator
obj instanceof Constructor


class Rabbit {}
let rabbit = new Rabbit();
console.log(rabbit instanceof Rabbit);  // true


class Animal {}
class Rabbit extends Animal {}
let rabbit1 = new Rabbit();
console.log(rabbit1 instanceof Animal);  // true


let arr = [1, 2, 3];

console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true


// Bonus: Object.prototype.toString for better type detection
    "[object Type]"
let objectToString = Object.prototype.toString;

console.log(objectToString.call([]));            // "[object Array]"
console.log(objectToString.call(123));           // "[object Number]"
console.log(objectToString.call(null));          // "[object Null]"
console.log(objectToString.call(undefined));     // "[object Undefined]"
console.log(objectToString.call(/regex/));       // "[object RegExp]"


// Symbol.toStringTag customization
let user = {
  [Symbol.toStringTag]: "User"
};

console.log(Object.prototype.toString.call(user)); 
// "[object User]"


