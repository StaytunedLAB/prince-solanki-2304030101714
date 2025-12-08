// output 
alert(obj); // [object Object]
anotherobj[obj] = 123;


//  object-to-number conversion
let num = number(obj);
let n = +obj;
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;


// Symbol.toPrimitive
let user = {
  name: "Prince",
  age: 20,

  valueOf() {
    return this.age;
  }
};

console.log(+user); // 20


// combining toString() and valueOf()
let user1 = {
  name: "Prince",
  age: 20,

  toString() {
    return `{name: "${this.name}"}`;
  },

  valueOf() {
    return this.age;
  }
};

console.log(String(user1)); // "{name: "Prince"}"
console.log(+user1);        // 20
console.log(user1 + 10);    // 30 