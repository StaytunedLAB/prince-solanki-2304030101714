// Custom iterable example – “range”

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;
    return {
      next() {
        if (current <= last) {
          return { done: false, value: current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// Now, range is iterable:
for (let num of range) {
  console.log(num);  // 1, 2, 3, 4, 5
}


// Built-in: String is Iterable

for (let ch of "Hello") {
  console.log(ch);  // "H", then "e", "l", "l", "o"
}


// Calling an Iterator Explicitly

let str = "Hello";
let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);  // H, e, l, l, o
}


// Iterables vs Array-like objects

let arrayLikee = {
  0: "Hello",
  1: "World",
  length: 2
};

// This fails:
for (let x of arrayLikee) {
  console.log(x);
}
// TypeError: arrayLike is not iterable


// Converting Iterable or Array-like → Real Array

// From a string (iterable) → array of characters
let chars = Array.from("Hello");
console.log(chars);       // ["H", "e", "l", "l", "o"]
console.log(chars.map(ch => ch.toUpperCase())); // ["H","E","L","L","O"]

// From our custom range iterable to an array
let rangeArr = Array.from(range);  // recall range from above
console.log(rangeArr);             // [1,2,3,4,5]

// Also works for array-like objects
let arrayLikeee = { 0: "Hello", 1: "World", length: 2 };
let arr = Array.from(arrayLikeee);
console.log(arr);                  // ["Hello", "World"]




