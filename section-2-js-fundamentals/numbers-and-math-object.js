const num1 = 100;
const num2 = 400;
let val;

// Simple Math with numbers

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.6);
val = Math.ceil(2.2); // Round Up
val = Math.floor(2.6); // Round Down
val = Math.sqrt(64);
val = Math.abs(-64);
val = Math.pow(10, 6);
val = Math.min(2, 44, 5, -3, 1);
val = Math.max(2, 44, 5, -3, 1);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

console.log(val);