const firstName = 'Dan';
const lastName = 'Reeves';
const str = 'Hello my name is dan';
const tags = 'Web desgin, Web Developement';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append - add onto a variable
val = 'Jeff ';
val += 'Daniels';

val = 'hello my name is ' + firstName + ' and my last name is ' + lastName;

// Escaping
val = 'that\'s awesome, i can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf('a');
val = firstName.lastIndexOf('a');

// charAt()
val = firstName.charAt('2');

// get last character
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0 ,2);

// slice
val = firstName.slice(0 ,2);
val = firstName.slice(-3);

// split
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('dan', 'Dave');

// includes()
val = str.includes('Hello');

console.log(val);