// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//    e.preventDefault();
//
//    console.log('Hello World');
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){

    let val;

    val = e;

    // Event Target
    val = e.target;
    val = e.target.className;
    val = e.target.classList;

    // Event Type
    val = e.type;

    // timestamp
    val = e.timestamp;

    // Coordanites of event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Coordanites of event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}