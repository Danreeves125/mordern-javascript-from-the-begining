
// // document.getElementsByClassName
//
// const items = document.getElementsByClassName('collection-item');
//
// console.log(items);
// console.log(items[0]);
//
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';
//
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
//
// console.log(listItems);
//
// console.clear();
//
// // document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
//
// console.log(lis);
// console.log(lis[0]);
//
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';
//
// lis = Array.from(lis);
//
// lis.reverse();
//
// lis.forEach(function(li, index){
//    console.log(li.className);
//    li.textContent = `${index} hello`;
// })
//
// console.clear();

//document.querySelectorAll - This returns a node list which does not need t be coverted to an array
const items = document.querySelectorAll('.collection-item');

items.forEach(function(li, index){
    console.log(li.className);
    li.textContent = `${index} hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(item, index){
    item.textContent = `This is odd`;
});

liEven.forEach(function(item, index){
    item.textContent = `This is Even`;
});

console.log(items);