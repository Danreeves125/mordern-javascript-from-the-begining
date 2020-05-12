// Function Declartions

function greeting(firstName = 'John', lastName = 'Doe') {
    // if(typeof firstName === 'undefined') {firstName == 'Dave'} // ES5 method of declaring a default
    // if(typeof lastName === 'undefined') {lastName == 'Dave'} // ES5 method of declaring a default
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greeting('Daniel', 'Reeves'));

// Function Expressions

const square = function(x = 3) {
    return x * x;
};

console.log(square(4));


// Immidiatley Invokable Function Expressions - IIFEs - Declare and run at the same time

(function() {
    console.log('IFFE ran');
})();

(function(name) {
    console.log('Hello ' + name);
})('Dan');

// Property Methods - When a function is put instead a property it is called a Method

const todo = {
    add: function() {
        console.log('add todo');
    },
    edit: function (id) {
        console.log(`Edit todo ${id}`);
    }
};

todo.delete = function() {
    console.log('Delete todo');
};

todo.add();
todo.edit(22);
todo.delete();