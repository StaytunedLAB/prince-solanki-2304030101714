// Two Ways of Thinking

// 1. Iterative
function sumto(n) {
    let sum = 0;
    for (let i = 0; i <=n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumto(100)); // 5050

// 2. Recursive
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

// Recursive traversals
let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 1600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};

// Recursive Structures
let companyy = {
  sales: [{name: "John", salary: 1000}],
  development: {
    sites: [{name: "Pete", salary: 1200}],
    internals: [{name: "Jack", salary: 900}]
  }
};


function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((sum, emp) => sum + emp.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}
