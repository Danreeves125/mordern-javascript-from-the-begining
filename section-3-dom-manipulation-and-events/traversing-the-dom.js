let val;

const list = document.querySelector('ul');
const listItem = document.querySelector('li');

val = listItem;
val = list;

// Get child nodes - This shows #text which represent line breaks
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

/*
   These show what the node type number is equal too
   1 - Element
   2 - Attribute (Deprecated)
   3 - Text Node
   8 - Comment
   9 - Document Itself
   10 - Doctype
 */

// Get children element nodes without line break, this just give you the elements
val = list.children;
val =  list.children[1];
list.children[1].textContent = 'Hello';

//Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Cpunt child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Get next sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;


console.log(val);
