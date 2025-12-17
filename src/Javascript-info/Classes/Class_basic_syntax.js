// The “class” syntax
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}

let user = new User("Alice");
user.sayHi(); // Hello, Alice!


// What is a class?
class User {
  constructor(name) {
    this.name = name;
  }
}

function User(name) {
  this.name = name;
}



// Class Expression
let User = class {
  sayHi() {
    console.log("Hello!");
  }
};

new User().sayHi(); // Hello!


// You can also name a class inside an expression:
let User = class MyClass {
  sayHi() {
    console.log(MyClass); // visible here
  }
};

new User().sayHi();


// Getters/Setters

class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 2) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }
}

let user1 = new User("Alice");
console.log(user1.name); // Alice

user1.name = "Bob";
console.log(user1.name); // Bob
user.name = "A"; // Name is too short.


//Computed names
let methodName = "sayHi";

class User {    
  [methodName]() {
    console.log("Hello!");
  }
}

new User().sayHi(); // Hello!


// Class fields (public & private)

class User {
  name = "Anonymous";  // public field

  #secret = 42;        // private field

  saySecret() {
    console.log(this.#secret);
  }
}

let user = new User();
console.log(user.name);    // Anonymous
user.saySecret();          // 42
