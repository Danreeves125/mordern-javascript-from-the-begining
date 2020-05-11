const person = {
    firstName: 'Daniel',
    lastName: 'Reeves',
    age: 26,
    email: 'danreeves125@hotmai.com',
    hobbies: ['coding', 'cycling'],
    address: {
        city: 'Kidderminster',
        county: 'Worchestershire',
    },
    getBirthYear: function() {
        return 2020 - this.age;
    },
}

let val;

val = person;

// Get Specific Value
val = person.firstName + person.lastName;
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.address['county'];
val = person.getBirthYear();

const people = [
    {name: 'kat'},
    {name: 'dan'},
    {name: 'jeff'},
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}

console.log(val);