// Recall iterables
let range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;

    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
};

for (let v of range) {
  console.log(v); // 1, 2, 3
}


// Async iterables
let asyncRange = {
  from: 1,
  to: 3,
  async *[Symbol.asyncIterator]() {
    for (let i = this.from; i <= this.to; i++) {
      await new Promise(r => setTimeout(r, 1000));
      yield i;
    }
  }
};

(async () => {
  for await (let v of asyncRange) {
    console.log(v); // 1, 2, 3 (with delay)
  }
})();


// Recall generators
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

for (let v of gen()) {
  console.log(v);
}


// Async generators (with finally)
async function* asyncGen() {
  try {
    yield 1;
    await new Promise(r => setTimeout(r, 500));
    yield 2;
  } finally {
    console.log("Cleanup here");
  }
}

(async () => {
  for await (let v of asyncGen()) {
    console.log(v);
  }
})();


// Real-life example: Paginated data
async function* fetchPages() {
  let page = 1;

  while (page <= 3) {
    let response = await fetch(`/api/data?page=${page}`);
    let data = await response.json();

    for (let item of data.items) {
      yield item;
    }

    if (!data.hasNext) break;
    page++;
  }
}

(async () => {
  for await (let item of fetchPages()) {
    console.log(item);
  }
})();
