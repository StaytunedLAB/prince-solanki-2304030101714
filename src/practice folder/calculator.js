let principal = 123000;
let rate = 0.8; 
let time = 36;

// Simple Interest
let simpleInterest = (principal * rate * time) / 100;
console.log("Simple Interest:", simpleInterest);

// Compound Interest
let amount = principal * Math.pow((1 + rate / 100), time);
let compoundInterest = amount - principal;
console.log("Compound Interest:", compoundInterest);