const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
// Clear Input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keyup
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
//Blur - Click outside an input
// taskInput.addEventListener('blur', runEvent);
//Cut
// taskInput.addEventListener('cut', runEvent);
//Paste
// taskInput.addEventListener('paste', runEvent);
// Input Event
// taskInput.addEventListener('input', runEvent);
// Change
select.addEventListener('change', runEvent);

function runEvent(e) {
    console.log(`Event Type: ${e.type}`);

    // console.log(e.target.value);
    // heading.innerText = e.target.value;
    // Get input Value
    // console.log(taskInput.value);
    //
}

