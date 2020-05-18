class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

const dan = new Person('Dan', 'Reeves');

console.log(dan.greeting());

// Subclass of person
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        // This calls the parent class constructor
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName} welcome to the business name, your membership level is ${this.membership}`;
    }
}

const john = new Customer('John', 'Smith', '07490280888', 'Pro');

console.log(john.greeting());
console.log(Customer.getMembershipCost());