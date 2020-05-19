class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');

        // Create tr element
        const row = document.createElement('tr');
        // Insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);

        let books;
    }

    showAlert (msg, className) {
        // Create Div
        const div = document.createElement('div');
        // Add Class Name
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(`${msg}`));
        // Get Parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        // insert alert
        container.insertBefore(div, form);

        // Timeout after 3s
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if(target.classList.contains('delete')) {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Local storage Class - Static methods don't need to be instansiated they can contain code that is used all over the place.
class Store {
    static getBooks() {
        let books;

        if(localStorage.getItem('books') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(function(book){
            const ui = new UI;

            // Add Book to ui
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach(function(book, index){
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks())

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){

    // Get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();
    // validate
    if(title === '' || author === '' || isbn === '') {
        //Error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);

        //Add to localstorage - Dont need to instantiate as it is a tatic method
        Store.addBook(book);

        // Show Success
        ui.showAlert('Book Added', 'success');
        // UI clear fields
        ui.clearFields()
    }

    e.preventDefault();
});

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    // Instantiate
    const ui = new UI();

    ui.deleteBook(e.target);

    // remove from localstorage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show Message
    ui.showAlert('Book Removed', 'success');

    e.preventDefault();
});