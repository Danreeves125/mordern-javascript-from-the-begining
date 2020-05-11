let val;

// Number to string
val = String(56551);
val = String(4 + 4);

// Boolean to string
val = String(true);

// Date to string
val = String(new Date());

// array to string
val = String([1,2,3,4]);

// toString()

val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true); // = 1
val = Number(false); // = 0
val = Number(null); // = 0
val = Number('hello'); // = NaN
val = Number([1,2,3,4]); // = NaN

val = parseInt('100.12'); // Display it as a integer
val = parseFloat('100.12'); // If you want to use decimals use parseFloat

// console.log(val);
// console.log(typeof val);
// console.log(val.length); // Can only be used on strings
// console.log(val.toFixed(2)); // Can only be used on numbers

// Type conersion

const val1 = '5';
const val2 = 2;
const sum = parseInt(val1 + val2);

console.log(sum);
console.log(typeof sum);