const  clearBtn = document.querySelector('.clear-tasks');
const  card = document.querySelector('.card');
const  heading = document.querySelector('h5');


// Click
// clearBtn.addEventListener('click', runEvent);

// Double Click
// clearBtn.addEventListener('dbl-click', runEvent);

// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter
// card.addEventListener('mouseenter', runEvent);
// Mouseleave
// card.addEventListener('mouseleave', runEvent);

// Mouseover - These will fire when you enter and leave elements
// card.addEventListener('mouseover', runEvent);
// Mouseout - These will fire when you enter and leave elements
// card.addEventListener('mouseout', runEvent);

// Mousemove
card.addEventListener('mousemove', runEvent);



// Event Handler
function runEvent(e) {
    console.log(`Event Type: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${Math.random() * 255 +1})`;
}