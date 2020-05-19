// person conctructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person('Dan', 'Reeves');

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
    // .call() is a function that allow us to call another function in the current context
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membershop = membership
}

// Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Dan', 'Smith', '07490280888', 'Pro User');

console.log(customer1);

// Customer Greeting
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} welocome to our company`
}
console.log(customer1.greeting());