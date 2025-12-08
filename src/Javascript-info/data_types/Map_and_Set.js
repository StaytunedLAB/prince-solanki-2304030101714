// Map — code examples

// Create a Map
let map = new Map();

// Set entries
map.set('1', 'string one');
map.set(1, 'number one');
map.set(true, 'boolean true');

// Different key types are distinct:
console.log( map.get('1') ); // "string one"
console.log( map.get(1) );   // "number one"
console.log( map.size );     // 3

// Using object as key:
let objKey = { name: "Alice" };
map.set(objKey, { age: 25 });
console.log( map.get(objKey) );      // { age: 25 }

// Deleting key
map.delete(true);
console.log( map.has(true) );        // false


// iterating Map

let maps = new Maps([ 
  ['name', 'John'], 
  ['age', 30], 
  [ { id: 1 }, 'object key' ]  // object as key
]);

for (let [key, value] of maps) {
  console.log(key, "->", value);
}

// Or iterate keys
for (let key of maps.keys()) {
  console.log("Key:", key);
}

// Or values
for (let val of maps.values()) {
  console.log("Value:", val);
}


// Object ⇄ Map conversion

let user = {
  name: "Alice",
  age: 25,
  city: "Ahmedabad"
};

// Object → Map
let mapp = new Map( Object.entries(user) );
console.log( mapp.get('city') );     // "Ahmedabad"

// Map → Object
mapp.set('country', 'India');
let objAgain = Object.fromEntries(mapp);
console.log(objAgain);
// { name: "Alice", age: 25, city: "Ahmedabad", country: "India" }


// using Set

let set = new Set();

set.add(1);
set.add(5);
set.add(5);             // duplicate — ignored
set.add("hello");
set.add({ x: 10 });

console.log(set.size);  // 4 (1,5,"hello", object)

console.log(set.has(5)); // true
console.log(set.has(3)); // false

// Iterate over set
for (let v of set) {
  console.log(v);
}

// Remove
set.delete(1);
console.log(set.has(1));  // false


