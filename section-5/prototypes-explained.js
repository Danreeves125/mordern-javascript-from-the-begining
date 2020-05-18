// Prototypes are used to store functions that are needed, this is so they do now flood the object with loads of function.

// Object.prototype
//Person.prototype
function Person(firstName, lastName, dob) {
    this.firstName = firstName;

    this.lastName = lastName;

    this.birthday = new Date(dob);

    // this.calcAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calculate age
Person.prototype.calcAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//Get Full name
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Get married
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName
}

const dan = new Person('Dan', 'Reeves', '08/12/1994')
const dave = new Person('Dave', 'Jeff', 'October 10 1992');

console.log(dave);
console.log(dan.calcAge());
console.log(dan.getFullName());

dave.getsMarried('Reeves');

console.log(dave.getFullName());

console.log(dan.hasOwnProperty('firstName'));
console.log(dan.hasOwnProperty('getFullName'));
