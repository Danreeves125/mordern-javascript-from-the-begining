// Person constructor - These should start with a capital Letter
function Person(name, dob) {
    // this keyword refers to the current instance of the object
    this.name = name;
    // this.age = age
    this.birthday = new Date(dob);

    // A Method is a function that is inside an object
    this.calcAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);

        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
// When this is in the global scope it refers to the window object
// console.log(this);
// this.alert('hello');

// const dan = new Person('Dan', 25);
// const john = new Person('John', 30);
//
// console.log(john.age);

const dan = new Person('Dan', '10/5/1994');

console.log(dan.calcAge());