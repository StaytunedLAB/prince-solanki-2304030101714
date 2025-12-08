// You can write numbers in several forms

let a = 255;        // decimal integer
let b = 3.14159;    // decimal float
let c = 0xff;       // hexadecimal
let d = 0b1010;     // binary
let e = 1e6;        // exponential notation, equals 1 × 10^6
// Underscore as digit separator (for readability):
let big = 1_000_000_000;


// Js Number Behavior

// 1. Different kinds of numeric literals
console.log(255, 0xff, 0b11111111, 0o377); 
// 255 255 255 255

console.log(1e6, 1_000_000); // 1000000 1000000

// 2. Precision issue with floats
console.log(0.1 + 0.2);              // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);      // false

// 3. Large numbers and limits
console.log(Number.MAX_SAFE_INTEGER);        // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1);    // 9007199254740992  — safe
console.log(Number.MAX_SAFE_INTEGER + 2);    // 9007199254740992  — lost integer precision

console.log(1e500);         // Infinity
console.log(Infinity + 1000); // Infinity

// 4. Conversions and formatting
let num = 1234.56789;
console.log(num.toString());           // "1234.56789"
console.log(num.toFixed(2));           // "1234.57"
console.log(num.toExponential(2));     // e.g. "1.23e+3"
console.log(num.toPrecision(5));       // e.g. "1234.6"

// 5. Checking integer / safe integer / finiteness
console.log(Number.isInteger(10));           // true
console.log(Number.isInteger(10.5));         // false
console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false
console.log(Number.isFinite(10 / 0));        // false (because 10/0 === Infinity)

// 6. Converting strings or other values to numbers
console.log(Number("123"));         // 123
console.log(Number("123.45"));      // 123.45
console.log(Number("abc"));         // NaN
console.log(Number(true));          // 1
console.log(Number(false));         // 0


// Other math functions

alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1


// parseInt and parseFloat

alert( +"100px" ); // NaN

