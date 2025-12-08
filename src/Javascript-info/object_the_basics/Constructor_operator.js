function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false


// Constructor with a method inside
function User(name) {
    this.name = name;

    this.sayHi = function () {
        alert("My name is: " + this.name);
    };
}

let john = new User("John");

john.sayHi(); // My name is: John


// new.target (checks if function called with new)
function User() {
    alert(new.target);
}

User();      // undefined
new User();  // function User { ... }

