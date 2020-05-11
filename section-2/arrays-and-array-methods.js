// Create arrays
const numbers = [1,2,3,4, 54, 64, 73];
const numbers2 = new Array(22, 43, 53, 64, 35);
const fruit = ['Apple', 'Banana', 'Orange'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get single value
val = numbers[2];
val = numbers[numbers.length - 1];

// Insert into array
numbers[2] = 100;

// find index value
val = numbers.indexOf(100);

// Mutating arrays

/*
numbers.push(123); // Add on to the end of array
numbers.unshift(123); // Add on to the front
numbers.pop(); // Take off from the end
numbers.shift(); // Take off from the front
numbers.splice(1, 3); // Splice Values
numbers.reverse(); // reverse array
 */

// Concatenate Arrays
val = numbers.concat(numbers2);

// Sorting arrays
// val = fruit.sort();
// val = numbers.sort();

// use the compare function
// val = numbers.sort(function(x, y){
//   return x - y;
// });
//
// // reverse sort
// val = numbers.sort(function(x, y){
//     return y - x;
// });

// find
function over50(num) {
    return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);