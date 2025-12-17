let obj = {};

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

alert(obj[key]); // [object Object], not "some value"!


let obj = Object.create(null);
// or: obj = { __proto__: null }

let key1 = prompt("What's the key?", "__proto__");
obj[key1] = "some value";

alert(obj[key1]); // "some value"