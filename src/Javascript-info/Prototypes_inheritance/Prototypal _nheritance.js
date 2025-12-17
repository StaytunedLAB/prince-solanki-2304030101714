// [[Prototype]]
let animal = { eats: true };
let rabbit = { jumps: true };

rabbit.__proto__ = animal;

alert(rabbit.eats); // true (taken from prototype)
alert(rabbit.jumps); // true


// Writing Doesn’t Use Prototype
let animals = {
  walk() {
    alert("Animal walk");
  }
};
let rabbit = {
  __proto__: animals
};
rabbit.walk = function() {
  alert("Rabbit! Bounce-bounce!");
};
rabbit.walk(); // Rabbit! Bounce-bounce!


// The Value of this
let animal1 = {
  sleep() {
    this.isSleeping = true;
  }
};
let rabbit = {
  name: "White Rabbit",
  __proto__: animal1
};
rabbit.sleep();
alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined


// for…in Loop
let animal2 = { eats: true };
let rabbit = { jumps: true, __proto__: animal2 };

for (let prop in rabbit) {
  alert(prop); // "jumps" then "eats"
}





