// CommonJS Syntax
// const person = require('./mymodule');

//ES2015
// import {person} from './mymodule2';
// import {person, sayHello} from './mymodule2';
// import * as UI from './mymodule2';
// import greeting from './mymodule2';

// console.log(UI.person.name);
// console.log(UI.sayHello());

import {http} from './http.js';
import {ui} from './ui';

// Get post on DOM Load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);


function getPosts() {
    http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch( error => console.log(error))
}

function submitPost() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    const data = {
        title,
        body
    }

    // Create Post
    http.post('http://localhost:3000/posts', data)
        .then(data => {
            getPosts();
        })
        .catch(error => console.log(error));
}