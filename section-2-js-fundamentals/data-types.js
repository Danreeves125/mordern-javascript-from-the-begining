/*

Date types

Primitive Data Types
- Stored Directly in the location the variable accesses
- Stored on the stack

* String
* Number
* Boolean
* Null
* Undefined
* Symbols

Reference Data Types
- Accessed by reference
- Objects that are stored on the heap
- A pointer to a location in memory

* arrays
* object literals
* functions
* dates
* anything esle you can store

JS is a dynamically typed language
- Types are associated with the values not variables
- The same variable can hold multiple types
- We do not need to specify types
- Most other languages are statically typed (Java, C#, C++)
- There are superset of JS and addons that allow static typing (Typescript, Flow)
*/

// Primative Types

// - String
const name = 'Dan Reeves';
console.log(typeof name);

//- Number
const age = 26;
console.log(typeof age);

// - Boolean
const hasKids = false;
console.log(typeof hasKids);

// - Null
const car = null;
console.log(typeof car);

// - undefined
let test;
console.log(typeof test);

// - Symbol
const sym = Symbol();
console.log(typeof sym);

// Reference Types

// - array
const hobbies = ['Gaming', 'coding'];
console.log(typeof hobbies);

// - Object literal
const address = {
    city:  'Kidderminster',
    county: 'Worchestershire',
}
console.log(typeof address);

// - Date
const today = new Date();
console.log(today);
console.log(typeof today);