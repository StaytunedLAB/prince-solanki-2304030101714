// Code Blocks

{
    let message = "Hello, World!";
    console.log(message); // Output: Hello, World!
}

console.log(message); // ReferenceError: message is not defined 

// Nested functions
function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  alert( "Hello, " + getFullName() );
  alert( "Bye, " + getFullName() );

}

// Lexical Environment
function makeCounter() {
  let count = 0;

  return function() {
    count++;      // uses outer variable
    return count;
  };
}

let counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2


// Garbage collection
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}


let counterr = makeCounter();

counterr(); // uses count
counterr(); // uses count again

counterr = null; // remove reference
