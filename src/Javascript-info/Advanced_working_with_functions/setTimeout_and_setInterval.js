// setTimeout
// syntax 
let timerId = setTimeout(func|code, [delay], [arg1], [arg2])


// For instance, this code calls sayHi() after one second:
function sayHi() {
  alert('Hello');
}
setTimeout(sayHi, 1000);


// With arguments:
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}
setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John


// The syntax to cancel:
let timerId1 = setTimeout();
clearTimeout(timerId1);


// Nested setTimeout
let timerId2 = setTimeout(function tick() {
  console.log("tick");
  timerId2 = setTimeout(tick, 1000);
}, 1000);


// Example: Dynamic interval
let delay = 1000;
setTimeout(function run() {
  console.log("tick");
  delay *= 2; // double the delay each time
  setTimeout(run, delay);
}, delay);

// Zero delay setTimeout
setTimeout(() => alert("World"));

alert("Hello");
