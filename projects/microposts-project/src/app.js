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

document.querySelector('#posts').addEventListener('click', deletePost);

document.querySelector('#posts').addEventListener('click', editPost);

document.querySelector('.card-form').addEventListener('click', cancelEdit);


function getPosts() {
    http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch( error => console.log(error))
}

function submitPost() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const id = document.querySelector('#id').value;

    const data = {
        title,
        body
    }

    if (title === '' || body === '') {
        ui.showAlert('Please fill in the fields', 'alert alert-danger');
    } else {
        if(id === '') {
            // Create Post
            http.post('http://localhost:3000/posts', data)
                .then(data => {
                    ui.showAlert('Post added', 'alert alert-success');

                    ui.clearInputs();
                    getPosts();
                })
                .catch(error => console.log(error));
        } else {
            http.put(`http://localhost:3000/posts/${id}`, data)
                .then(data => {
                    ui.showAlert('Post Update', 'alert alert-success');

                    ui.changeFormState('add');

                    getPosts();
                })
                .catch(error => console.log(error));
        }
    }
}

function getPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(error => console.log(error))
}

function deletePost(event) {
    event.preventDefault();

    if(event.target.parentElement.classList.contains('delete')) {
        const id = event.target.parentElement.dataset.id;

        if(confirm('Are you sure?')) {
            http.delete(`http://localhost:3000/posts/${id}`)
            .then(data => {
                ui.showAlert('Post Removed', 'alert alert-success');
                getPosts();
            })
            .catch(error => console.log(error));
        }
    }
}

function editPost(event) {
    event.preventDefault();

    if(event.target.parentElement.classList.contains('edit')) {
        const id = event.target.parentElement.dataset.id;

        const title = event.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        const body = event.target.parentElement.previousElementSibling.textContent;

        const data = {
            id,
            title,
            body
        }

        ui.fillForm(data);
    }
}

function cancelEdit(event) {
    event.preventDefault();

    if(event.target.classList.contains('post-cancel')) {
        ui.changeFormState('add');
    }
}