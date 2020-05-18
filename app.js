class Task {
    constructor(task) {
        this.task = task;
    }
}

class UI {
    getAllTasks() {
        let tasks;

        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.forEach(function(taskItem){
            // Create element
            const listItem = document.createElement('li');

            // Add Classes
            listItem.className = 'list-item';

            // Add innerHTML
            listItem.innerHTML = `
                <p>${taskItem}</p>
                <a href="#" class="delete-task"></a>
            `;

            document.querySelector('.task-list').appendChild(listItem);
        });
    }

    addTask(taskItem) {
        // Create element
        const listItem = document.createElement('li');
        
        // Add Classes
        listItem.className = 'list-item';
        
        // Add innerHTML
        listItem.innerHTML = `
            <p>${taskItem.task}</p>
            <a href="#" class="delete-task"></a>
        `;

        document.querySelector('.task-list').appendChild(listItem);

        let tasks;

        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(`${taskItem.task}`);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    deleteTodo(target) {
        if(target.classList.contains('delete-task')) {
            target.parentElement.remove();
        }

        let tasks;

        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        console.log(target.parentElement.textContent);

        tasks.forEach(function(task, index){
            if(target.parentElement.closest('p').textContent === task) {
                tasks.splice(index, 1);
            }
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    clearTaskInput() {
        document.querySelector('#task').value = '';
    }

    showAlert(msg, className) {
        // Create div
        const div = document.createElement('div');
        // Add Classes
        div.className = `alert ${className}`;
        // Append text
        div.appendChild(document.createTextNode(`${msg}`));

        const card = document.querySelector('.card'),
              form = document.querySelector('#task-form');

        card.insertBefore(div, form);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Instantiate ui
    const ui = new UI();
    ui.getAllTasks();
});

document.getElementById('task-form').addEventListener('submit', function(e){
    const taskInput = document.querySelector('#task').value;

    // Instantiate a new task
    const task = new Task(taskInput);

    // Instantiate a new task
    const ui = new UI();

    // Check if input has a value
    if(taskInput === '') {
        alert('Hello');
    } else {
        // Add task
        ui.addTask(task);
        // Show Alert
        ui.showAlert('Todo Added!!!', 'alert--success');
        // Clear task Input
        ui.clearTaskInput();
    }

    e.preventDefault();
});

// Delete task
document.querySelector('.task-list').addEventListener('click', function(e){

    const ui = new UI();
    // Delete Tasks
    ui.deleteTodo(e.target);
    // Show alert
    ui.showAlert('Task Deleted!!!!', 'alert--success');

    e.preventDefault();
});