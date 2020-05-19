const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Reeves');

console.log(mary.greeting());

const dan = Object.create(personPrototypes, {
    firstName: {value: 'Dan'},
    lastName: {value: 'Reeves'},
    age: {value: 36},
});

console.log(dan);
console.log(dan.greeting());