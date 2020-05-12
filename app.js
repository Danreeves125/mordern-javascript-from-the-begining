// For Loop

for(let i = 0; i < 4; i++) {
    console.log(`Number ${i}`);
}

// Run something on a specific iteration and continue
for(let i = 0; i < 4; i++) {
    if(i === 2) {
        console.log('2 is my fav number');
        continue; // Keep going with the loop
    }

    console.log(`Number ${i}`);
}

// Break Loop
for(let i = 0; i < 4; i++) {
    if(i === 5) {
        console.log('stop loop');
        break;
    }

    console.log(`Number ${i}`);
}

console.clear();

// While Loop - While loops are used when you are uncertain how long it will run

// let i = 0;
//
// while(i < 10) {
//     console.log(i);
//     i++;
// }

// Do While - Will always run once regardless

// let i = 0;
//
// do {
//     console.log(i);
//     i++
// }
//
// while(i < 10);

// Loop Throguh array
const allSizes = ['Small', 'Medium', 'Large'];

allSizes.forEach(function(size) {
    console.log(`${size}`);
});

// for(let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }

// forEaach
// fruits.forEach(function(fruit, index, array){
//     console.log(`${fruit} : ${index} : ${array}`);
// });

// Map - is used to return a differernt array
// const users = [
//     {id: 1, name: 'Dan'},
//     {id: 2, name: 'Steve'},
//     {id: 3, name: 'Jet'},
// ];
//
// const ids = users.map(function(user){
//     return user.id;
// });
//
// console.log(ids);

// For in loop -- used with objects

const user = {
    firstName: 'Dan',
    lastName: 'Reeves'
};

for(let x in user) {
    console.log(`${x}, ${user[x]}`);
}