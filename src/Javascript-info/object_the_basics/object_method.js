let user = {
  name: "John",
  age: 30,
  sayHi: function() {
    console.log("Hello!");
  }
};

user.sayHi(); // Hello!
// Here, sayHi is a method of the object user.


// this method 
let user1 = {
  name: "John",
  age: 30,
  sayName() {
    console.log(this.name);
  }
};

user.sayName(); // John

let admin = user;
admin.sayName(); 

////“this” is not bound

let user2 = {name: "prince"};
let admin1 = { name: "Admin"};

function sayHi() { 
    alert(this.name);
}

user2.f = sayHi;
admin1.f = sayHi;

user2.f(); // prince  (this == user2)
admin1.f(); // Admin  (this == admin1)

admin1['f'](); // Admin (dot or square brackets doesn’t matter)


// Arrow functions have no “this”
let user3 = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya