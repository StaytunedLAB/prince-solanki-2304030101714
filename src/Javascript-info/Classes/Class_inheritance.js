// The extends keyword
class Animal {
  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!


// Overriding a method
class Animal {
  stop() {
    alert(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  stop() {
    alert(`${this.name} stops abruptly!`);
  }
}

let rabbit1 = new Rabbit("Little Rabbit");
rabbit1.stop(); // Little Rabbit stops abruptly!



// Overriding constructor
class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);          // must call super first
    this.earLength = earLength;
  }
}


// super: internals & usage
class Animal {
  eat() { alert(`${this.name} eats.`); }
}

class Rabbit extends Animal {
  eat() {
    super.eat();           // parent method
    alert(`${this.name} snacks!`);
  }
}




