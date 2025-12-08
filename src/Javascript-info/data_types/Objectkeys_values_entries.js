let user = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(Object.keys(user));
// → ["name", "age", "city"]

console.log(Object.values(user));
// → ["John", 30, "New York"]

console.log(Object.entries(user));
// → [ ["name", "John"], ["age", 30], ["city", "New York"] ]


// Transform object — double all salaries

let salaries = {
  Alice: 5000,
  Bob:   7000,
  Carol: 6000
};

let doubled = Object.fromEntries(
  Object.entries(salaries).map(([name, pay]) => [name, pay * 2])
);

console.log(doubled);
// → { Alice: 10000, Bob: 14000, Carol: 12000 }


// Sum numeric property values

let salariess = { John: 100, Pete: 300, Mary: 250 };

function sumSalariess(salMap) {
  return Object.values(salMap).reduce((sum, val) => sum + val, 0);
}

console.log(sumSalariess(salariess));  // 650


// Count properties (keys count)

function countProps(obj) {
  return Object.keys(obj).length;
}

let users = { name: "Alice", age: 25, city: "Delhi" };
console.log(countProps(users));  // 3