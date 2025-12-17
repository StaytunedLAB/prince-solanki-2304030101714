// Generator functions
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }


// Generators are iterable
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

for (let n of numbers()) {
  console.log(n);
}
// 1, 2, 3


// Using generators for iterables
let range = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i++) {
      yield i;
    }
  }
};

console.log([...range]); // [1,2,3,4,5]


// Generator composition
function* gen1() {
  yield 1;
  yield 2;
}

function* gen2() {
  yield* gen1();
  yield 3;
}

console.log([...gen2()]); // [1, 2, 3]


// yield is a two-way street
function* gen() {
  let result = yield "Hello";
  console.log(result);
}

let g1 = gen();
g.next();           // { value: "Hello", done: false }
g.next("World");    // logs: World



// generator.throw
function* gen() {
  try {
    yield 1;
  } catch (e) {
    console.log("Error caught:", e.message);
  }
}

let g2 = gen();
g2.next();
g2.throw(new Error("Oops"));


// generator.return
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

let g3 = gen();
g3.next();          // { value: 1, done: false }
g3.return("Done");  // { value: "Done", done: true }
g3.next();          // { value: undefined, done: true }






