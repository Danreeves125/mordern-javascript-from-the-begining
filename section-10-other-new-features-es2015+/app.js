// Sets - store uniquie values of any type

const set1 = new Set();

// Add values to set

set1.add(100);
set1.add('a strong');
set1.add({name: 'Dan'});
set1.add(true);

const set2 = new Set([1, true, 'strong', {name: 'dan'}]);

// console.log(set1);

// Get Count
// console.log(set1.size);

// Check for values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has({name: 'Dan'}));

// Delete from set

// set1.delete(100);

// console.log(set1);

// Iterate through sets

// For...of
// for(let item of set1) {
//     console.log(item);
// }

// forEach
// set1.forEach(item => {
//     console.log(item);
// });

// Convert set to array
const setArr = Array.from(set1);

console.log(setArr);
