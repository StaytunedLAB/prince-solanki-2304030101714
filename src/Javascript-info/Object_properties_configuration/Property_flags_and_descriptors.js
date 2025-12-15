let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/


// Property flags

let user1 = {};

Object.defineProperty(user1, "name", {
  value: "Prince",
  writable: false
});

user1.name = "Rahul";   // ❌ ignored (or error in strict mode)
console.log(user1.name); // "Prince"


// enumerable → Non-enumerable
let user2 = {
  name: "Prince",
  age: 20
};

Object.defineProperty(user2, "age", {
  enumerable: false
});

for (let key in user2) {
  console.log(key);    // only "name"
}

console.log(Object.keys(user2)); // ["name"]


// Non-configurable

let user3 = {};

Object.defineProperty(user3, "id", {
  value: 101,
  configurable: false
});

delete user3.id;      // ❌ fails
console.log(user3.id); // 101


// Object.defineProperties

let user4 = {};

Object.defineProperties(user4, {
  name: {
    value: "Prince",
    writable: true
  },
  age: {
    value: 20,
    writable: false
  }
});

console.log(user4.name); // Prince
user4.age = 25;
console.log(user4.age);  // 20 (unchanged)


// Object.getOwnPropertyDescriptors

let user5 = {
  name: "Prince",
  age: 20
};

let descriptors = Object.getOwnPropertyDescriptors(user5);
console.log(descriptors);


// Sealing an object globally
let user6 = { name: "Prince" };

Object.preventExtensions(user6);
user6.age = 20;   // ❌ ignored

