// Single / double quotes (same)
let a = "Hello";
let b = 'World';

// Template literals (backticks)
let name = "Prince";
let greeting = `Hi ${name}!`;        // interpolation
let multi = `Line1
Line2`;                              // multi-line string

console.log(a, b);                   // Hello World
console.log(greeting);               // Hi Prince!
console.log(multi);
/* prints:
Line1
Line2
*/


// Special characters

console.log("She said \"Hi\"");      // She said "Hi"
console.log("Line1\nLine2");         // newline
console.log("Tab\tspace");           // tab

// Unicode
console.log("\u00A9 2025");          // © 2025
console.log("\u{1F600}");            // 😀 (emoji using codepoint escape)


// String length

console.log("Hello".length);         // 5
console.log("".length);              // 0

let s2 = "😀";                        // grinning face emoji
console.log(s2.length);               // 2 (surrogate pair, two code units)

// If you want actual Unicode characters count:
console.log([...s2].length);          // 1 (spread into array of codepoints)

// Accessing characters

let str = "JavaScript";
console.log(str[0]);                 // "J"
console.log(str.charAt(1));          // "a"
console.log(str.at(-1));             // last character "t"

// Out-of-range returns undefined ([]) or empty string (charAt)
console.log(str[100]);               // undefined
console.log(str.charAt(100));        // ""


// Strings are immutable

let s = "hello";
// s[0] = "H";    // has no effect
console.log(s);                      // "hello"

// To modify, create a new string
let newS = "H" + s.slice(1);
console.log(newS);                   // "Hello"


// Changing the case

let txt = "HeLLo World";
console.log(txt.toUpperCase());      // "HELLO WORLD"
console.log(txt.toLowerCase());      // "hello world"

// For locale-aware changes, use:
console.log("ı".toUpperCase());      // depends on locale in some languages
console.log("straße".toUpperCase()); // may need localeCompare for precise rules


// Searching for a substring

let phrase = "The quick brown fox";

console.log( phrase.includes("quick") );   // true
console.log( phrase.indexOf("o") );        // 10 (first 'o')
console.log( phrase.lastIndexOf("o") );    // 17 (last 'o')

console.log( phrase.startsWith("The") );  // true
console.log( phrase.endsWith("fox") );    // true

// Regex search
console.log( "abc123".search(/\d+/) );    // 3 (index where digits start)


// Getting a substring

let s1 = "JavaScript";

// slice(start, end)
console.log(s1.slice(4, 10));    // "Script"
console.log(s1.slice(-6));       // "Script"

// substring(start, end)
console.log(s1.substring(0, 4)); // "Java"
console.log(s1.substring(4, 0)); // "Java"  (swaps if first > second)

// substr(start, length)
console.log(s1.substr(4, 6));    // "Script"  (start, length)  — avoid in new code