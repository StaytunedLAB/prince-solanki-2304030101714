let arr = []; //usual syntax to declare an array
let arr2 = new Array(); //another syntax to declare an array



let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); 
fruits[2] = "orange";
fruits[3] = "grapes";

console.log(fruits);


// An array can store elements of any type.
let arr1 = ["apple", {name: "John"}, true, function() {alert("Hello");}];
alert(arr1[1].name);
arr1[3]();


// Useful Array Methods: Adding / Removing / Getting Elements
let fruitss = ["apple", "banana"];
fruitss.push("orange"); // adds to the end
let last = fruitss.pop(); // removes from the end
fruitss.unshift("mango"); // adds to the beginning
let first = fruitss.shift(); // removes from the beginning
console.log(fruitss);   


let fruit = ["banana"];
let arrr = fruit;
alert(arrr === fruit); // true
arrr.push("mango");
alert(fruit);