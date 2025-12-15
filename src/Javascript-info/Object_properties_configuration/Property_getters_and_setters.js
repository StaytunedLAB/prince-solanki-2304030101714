// Getters and Setters

let user = {
  firstName: "Prince",
  lastName: "Solanki",

  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  set fullName(value) {
    let parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(user.fullName);   // Prince Solanki

user.fullName = "Rahul Mehta";
console.log(user.firstName); // Rahul
console.log(user.lastName);  // Mehta


// Accessor Descriptors

let user1 = {
  get name() {
    return "Prince";
  }
};
/*output
console.log(Object.getOwnPropertyDescriptor(user, "name"));
{
  get: ƒ,
  set: undefined,
  enumerable: true,
  configurable: true
}*/

// Defining accessor using Object.defineProperty
let user2 = {};

Object.defineProperty(user2, "age", {
  get() {
    return this._age;
  },
  set(value) {
    if (value < 0) {
      console.log("Age must be positive");
      return;
    }
    this._age = value;
  }
});

user2.age = 20;
console.log(user2.age); // 20

user2.age = -5;         // Age must be positive

