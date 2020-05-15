/*
    Thing to add too application.

    - Edit collection item
    - Add checkbox to say it's done.
 */


// Define UI Vars
const form = document.querySelector('#task-form'),
      taskList = document.querySelector('.collection'),
      clearBtn = document.querySelector('.clear-tasks'),
      filter = document.querySelector('#filter'),
      taskInput = document.querySelector('#task');

// load All Event Listener

loadEventListeners();

function loadEventListeners() {
    // DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    //Add Task Event
    form.addEventListener('submit', addTask);
    // Remove Task event
    taskList.addEventListener('click', removeTask);
    // Clear Task Event
    clearBtn.addEventListener('click', clearTasks);
    // Filter Tasks Event
    filter.addEventListener('keyup', filterTasks);
}

function getTasks(){
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
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(task));
        // Create Ne link Element
        const link = document.createElement('a');
        // Add Class
        link.className = 'delete-item secondary-content';
        // Add HTML Icon
        link.innerHTML = '<i class="fa fa-remove"></i>'
        //Append link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);
    });
}

// Add Task
function addTask(e) {
    if(taskInput.value === '') {
        alert('add a task');
    }

    // Create li Element
    const li = document.createElement('li');
    // Add Class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create Ne link Element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-item secondary-content';
    // Add HTML Icon
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //Append link to li
    li.appendChild(link);

    // Store in localstroage
    storeInLocalStorage(taskInput.value);

    // Append li to ul
    taskList.appendChild(li);

    //Clear input
    taskInput.value = '';


    e.preventDefault();
}

// Store Task
function storeInLocalStorage(task) {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure')) {
            e.target.parentElement.parentElement.remove();

            // Remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement)
        }
    }
}

// Remove from local storage
function removeTaskFromLocalStorage(taskItem) {
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

// Clear Tasks
function clearTasks() {
    // taskList.innerHTML = '';

    // Faster - Check to see if there is a firstChild if there is run, then once the firstChild has been removed stop
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // Clear from local Storage
    clearTaskFromLocalStorge();
}

function clearTaskFromLocalStorge() {
    localStorage.clear();
}

// Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) !== -1) {
            task.style.display = 'block;'
        } else {
            task.style.display = 'none;'
        }
    });
}