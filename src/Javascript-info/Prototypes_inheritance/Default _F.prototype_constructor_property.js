function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

alert( Rabbit.prototype.constructor == Rabbit ); // true


function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

alert(rabbit.constructor == Rabbit); // true (from prototype)


function Rabbit(name) {
  this.name = name;
  alert(name);
}

let rabbit1 = new Rabbit("White Rabbit");

let rabbit2 = new rabbit1.constructor("Black Rabbit");


function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};

let rabbit3 = new Rabbit();
alert(rabbit3.constructor === Rabbit); // false