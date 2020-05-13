// Global Scope
var a = 1;
let b = 2;
const c = 3;

function test() {
    //Function Scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scope ', a, b, c);
}

test();

// Block Scope
// if(true) {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//
//     console.log('Block scope ', a, b, c);
// }

// for(var a = 0; a < 10; a++) {
//     console.log(a);
// }

console.log('Global scope ', a, b, c);