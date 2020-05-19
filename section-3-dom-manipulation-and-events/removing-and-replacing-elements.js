// replace Element

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// Create text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get Old Heading
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// replace
cardAction.replaceChild(newHeading, oldHeading);


// Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item

lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// Classes & attributes
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0]

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
link.setAttribute('title', 'test');
val = link.hasAttribute('title');
link.removeAttribute('title');


console.log(val);