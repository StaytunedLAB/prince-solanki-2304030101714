// Mixin object
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  }
};


// Class that uses the mixin
    class User {
  constructor(name) {
    this.name = name;
  }
}


Object.assign(User.prototype, sayHiMixin);


new User("Dude").sayHi(); // Hello Dude


// Mixins with inheritance inside
let sayMixin = {
  say(phrase) {
    alert(phrase);
  }
};

let sayHiMixin1 = {
  __proto__: sayMixin,

  sayHi() {
    super.say(`Hello ${this.name}`);
  },
  sayBye() {
    super.say(`Bye ${this.name}`);
  }
};

Object.assign(User.prototype, sayHiMixin);


// Event mixin object
let eventMixin = {
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  off(eventName, handler) {
    let handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;
    this._eventHandlers[eventName] = handlers.filter(h => h !== handler);
  },

  trigger(eventName, ...args) {
    let handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;
    handlers.forEach(handler => handler.apply(this, args));
  }
};


// Usage
class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

menu.on("select", value => alert(`Value selected: ${value}`));

menu.choose("123"); // triggers event
