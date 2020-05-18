class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);

    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`
    }

    calcAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getMarried(newLastName) {
        this.lastName = newLastName;
    }


    // This is a static method
    static addNumbers(x, y) {
        return x + y
    }
}

// Create object from a class
const dan = new Person('Dan', 'Reeves', '10/05/1994');

dan.getMarried('Ormsby');

console.log(Person.addNumbers(1, 2));