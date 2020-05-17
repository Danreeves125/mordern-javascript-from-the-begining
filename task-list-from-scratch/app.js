const addTaskInput = document.getElementById('add-task'),
    addTaskButton = document.getElementById('add'),
    taskList = document.querySelector('.task-list'),
    clearTasks = document.getElementById('clear-tasks');

// Load All Event Listeners
loadEventListeners();

function loadEventListeners() {
    // Get All Tasks
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add Tasks Function
    addTaskButton.addEventListener('click', addTask);
    // Delete task
    taskList.addEventListener('click', deleteTask);
    //Clear all tasks
    clearTasks.addEventListener('click', clearAllTasks);
}

// Get Tasks
function getTasks() {

    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // Create li Element
        const li = document.createElement('li');
        // Add Class
        li.className = 'list-item';
        // Create text node

        // Create p element
        const text = document.createElement('p');

        text.appendChild(document.createTextNode(task))

        li.appendChild(text);

        // Create a element
        const deleteIcon = document.createElement('a');
        // Add Class
        deleteIcon.className = 'delete-task';
        // Append to li
        li.appendChild(deleteIcon);

        // Append to task list
        taskList.appendChild(li);
    });
}

// Add Task
function addTask(e) {
    // Check if input has a value
    if(addTaskInput.value === '') {
        alert('Please add a task');
    } else {
        // Create li Element
        const li = document.createElement('li');
        // Add Class
        li.className = 'list-item';
        // Create text node

        // Create p element
        const text = document.createElement('p');

        text.appendChild(document.createTextNode(addTaskInput.value))

        li.appendChild(text);

        // Create a element
        const deleteIcon = document.createElement('a');
        // Add Class
        deleteIcon.className = 'delete-task';
        // Append to li
        li.appendChild(deleteIcon);

        // Append to task list
        taskList.appendChild(li);

        addTaskToLocalStorage(addTaskInput.value);

        addTaskInput.value = '';

        e.preventDefault();
    }
}

function addTaskToLocalStorage(task) {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete Task
function deleteTask(e) {
    if(e.target.classList.contains('delete-task')) {
        if(confirm('Are you sure you want to delete the task')) {
            e.target.parentElement.remove();
        }
    }

    deleteTaskFromLocalStorage(e.target.parentElement);
}

function deleteTaskFromLocalStorage(taskItem) {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear All Tasks
function clearAllTasks() {
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage() {
    localStorage.clear();
}