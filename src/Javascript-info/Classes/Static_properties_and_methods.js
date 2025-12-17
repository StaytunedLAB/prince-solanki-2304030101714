// Static properties & static methods
class User {
  static sayHello() {
    console.log("Hello!");
  }
}

User.sayHello(); // OK


// Static methods example (utility)
class Article {
  static compare(a, b) {
    return a.date - b.date;
  }
}

articles.sort(Article.compare);


// Static properties
class Article {
  static publisher = "JS Weekly";
}

console.log(Article.publisher); // "JS Weekly"


// Accessing static from inside class
class Counter {
  static count = 0;

  constructor() {
    this.constructor.count++;
  }

  static getCount() {
    return this.count;
  }
}


// Inheritance of static properties & methods
class Animal {
  static planet = "Earth";
  static compare(a, b) {
    return a.speed - b.speed;
  }
}

class Rabbit extends Animal {}

console.log(Rabbit.planet);  // "Earth"
