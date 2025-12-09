// Rest Parameters (…)

function sum(...numbers) {
  let total = 0;
  for (let n of numbers) total += n;
  return total;
}

console.log(sum(1, 2, 3));  // 6
console.log(sum(10, 20));   // 30


// The “arguments” variable
function showName() {
  alert( arguments.length ); 
  alert( arguments[0] );
  alert( arguments[1] );

  // it's iterable
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

// Example: spreading an array

let arr = [1, 2, 3];
console.log(...arr);  
// 1 2 3

// Combine (merge) two arrays
let arr1 = [1, 2];
let arr2 = [3, 4];

let merged = [...arr1, ...arr2];
console.log(merged);  // [1, 2, 3, 4]


// Using spread with Math.max
let numbers = [5, 10, 20];
console.log(Math.max(...numbers)); // 20


// Copy an array/object
let arr11 = [1, 2, 3];
let copy = [...arr11];

copy.push(4);

console.log(arr11);  // [1, 2, 3]
console.log(copy); // [1, 2, 3, 4]


// Copy an object
let obj = { name: "John", age: 20 };
let clone = { ...obj };

clone.age = 25;

console.log(obj);    // {name: "John", age: 20}
console.log(clone);  // {name: "John", age: 25}
