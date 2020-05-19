// Normal Function
// const sayHello = function() {
//     console.log('hello');
// }

// const sayHello = () => {
//     console.log('hello');
// }

// One line function down not need braces
// const sayHello = () => console.log('hello');

// One line returns
// const sayHello = () => 'Hello';

// Rerun Object
// const sayHello = () => ({msg: 'Hello'});

// Single param does not ned parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple Params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHello('dan', 'Reeves');

const users = ['Dan', 'Jack', 'Shug'];

// Old ES5
// const nameLengths = users.map(function(name){
//     return name.length;
// });

// Shorter - Arrow Function
// const nameLengths = users.map((name) => {
//     return name.length;
// });

// Shortest
const nameLengths = users.map((name => name.length));


console.log(nameLengths);