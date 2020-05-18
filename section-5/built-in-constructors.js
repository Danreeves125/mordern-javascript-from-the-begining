// String
const name1 = 'Dan';
const name2 = new String('dan'); // Object not a primative value

// name2.foo = 'bar';

// console.log(name2);
console.log(typeof name2);

if(name1 === 'Dan' ) {
    console.log('yes');
} else {
    console.log('no');
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x, y) {
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

// Object
const dan1 = {name: 'Dan'};
const dan2 = new Object({name: 'Dan'});

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// Regular Expressions
const re1 = /\w+/  // This is looking for a word character that occurs one or more times
const re2 = new RegExp('\\w+');

console.log(re2);