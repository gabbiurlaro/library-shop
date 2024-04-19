const { Book, Library } = require('./modules/book.js');
const { db } = require('./modules/db/db.js');
const LibraryDAO = require('./modules/db/bookDao.js');

const library = new LibraryDAO(db);

console.log('Populating the tables with some books...')

library.insertBook(new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 9.99));
library.insertBook(new Book('To Kill a Mockingbird', 'Harper Lee', 1960, 7.99));
library.insertBook(new Book('1984', 'George Orwell', 1949, 8.99));
library.insertBook(new Book('The Catcher in the Rye', 'J.D. Salinger', 1951, 6.99));
library.insertBook(new Book('The Hobbit', 'J.R.R. Tolkien', 1937, 12.99));
library.insertBook(new Book('Fahrenheit 451', 'Ray Bradbury', 1953, 10.99));
library.insertBook(new Book('Pride and Prejudice', 'Jane Austen', 1813, 5.99));
library.insertBook(new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1954, 14.99));
library.insertBook(new Book('Animal Farm', 'George Orwell', 1945, 7.99));
library.insertBook(new Book('The Grapes of Wrath', 'John Steinbeck', 1939, 11.99));


