let a = 5;
let b = a;
b = 10;             // change b
console.log(a, b);  // 5 10  — a stays unchanged


// Primitives Using Methods & Behavior

// 1. Primitive string with methods
let str = "hello world";
console.log(str.toUpperCase()); // "HELLO WORLD"
console.log(str);               // "hello world"  — original not changed

// 2. Primitive number with methods
let num = 3.14159;
console.log(num.toFixed(2));    // "3.14"
console.log(num.toString());    // "3.14159"

// 3. Boolean primitive conversion
let c = false;
console.log(String(b));         // "false"
console.log(Boolean(""));       // false (empty string is falsy)

// 4. Converting types using wrapper constructors (as functions, not with new)
console.log(Number("123"));     // 123  (string → number)
console.log(Boolean(0));        // false (0 → false)
console.log(String(456));       // "456" (number → string)

// 5. Avoid using wrapper objects via new
let s1 = "hello";
let s2 = new String("hello");
console.log(typeof s1, typeof s2);  // "string" "object"
console.log(s1 === s2);             // false — different types

// 6. Trying methods on null or undefined (not allowed)
let x = null;
// console.log(x.toString());        // Error!  — cannot access properties on null or undefined
