// Global object
alert("Hello");
// is the same as
window.alert("Hello");

// If we used let instead, such thing wouldn’t happen:
let gLet = 5;
alert(window.gLet); // undefined (doesn't become a property of the global object)


// Using for polyfills
if (!window.Promise) {
  alert("Your browser is really old!");
}

