let val;

val = document;
// val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;

val = document.links;
val = document.links[3];
val = document.links[3].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

// You need to turn a collection into an array before you can use a forEach
let scripts = document.scripts;

let scriptsArray = Array.from(scripts);

scriptsArray.forEach(function(script){
    console.log(script)
});


console.log(val);