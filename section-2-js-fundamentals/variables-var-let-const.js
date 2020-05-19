// Var, Let, Const es2015 is es6

// var name = 'Dan Reeves';
//
// console.log(name);
//
// name = 'Kathryn Ormsby';
// console.log(name);

// Init a var
var greeting; // Init a value when you are using a conditional statement
console.log(greeting);

greeting = 'Hello';
console.log(greeting);

// These are the only things that can be inside a variable: Letters, numbers, _, $
// They cannot start with a number

// Multi word vars

var firstName = 'Dan'; // Camelcase
var first_name = 'Kat'; // Underscore
var FirstName = 'Bill'; // PascalCase - used in OOJS
var firstname = 'Dave';

// let
// let name = 'Dan Reeves';
//
// console.log(name);
//
// name = 'Kathryn Ormsby';
// console.log(name);

// Const

// const name = 'Dan';
// console.log(name);
// Cannot Reassign
// name = 'Jeff';
// Have to assign a value
// const greeting;

const person = {
    name: 'John',
    age: 30,
}

person.name = 'Sara';
person.age = 32;

// console.log(person);

numbers = [1,2,3,4,5,6];
numbers.push(12);

console.log(numbers);