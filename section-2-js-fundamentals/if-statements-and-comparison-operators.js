const id = 100;

// Equal To
if(id == 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}

// Not Equal To
if(id != 101) {
    console.log('correct');
} else {
    console.log('incorrect');
}

// Equal to value and type
if(id === 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}

// Not Equal to value and type
if(id !== 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}

console.clear();

// Test if undefined
if(typeof id !== 'undefined') {
    console.log(`The ID is ${id}`);
} else {
    console.log('No Id');
}

// Greater or less than
if(id > 200) {
    console.log('correct');
} else {
    console.log('incorrect');
}

// If Else
const colour = 'yellow';

if(colour === 'red') {
    console.log('The colour is red');
} else if(colour === 'yellow'){
    console.log('The colour is yellow');
} else {
    console.log('Colour is not red or yellow');
}

//Logical Operators - Test more than one thing

const name = 'Dan';
const age = 26;

// AND &&
if(age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65) {
    console.log(`${name} cannot run in the race`);
} else {
    console.log(`${name} can run in the race`);
}

// Ternary Operator - Shorthand conditionals
console.log(id === 100 ? 'Correct' : 'Incorrect');


