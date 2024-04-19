const { Book, Library } = require('../book.js');
// CRUD operations

class LibraryDAO {
    constructor(db) {
        this.db = db;
    }

    insertBook(book)  {
        this.db.run(`INSERT INTO books (title, author, yearOfPublication, price) VALUES (?, ?, ?, ?)`, [book.title, book.author, book.yearOfPublication, book.price], (err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    updateBook(id, title, year, price) {
        // check if the book exists
        this.db.get(`SELECT * FROM books WHERE id = ?`, [id], (err, row) => {
            if (err) {
                console.log(err);
            }
            if (!row) {
                throw new Error('Book not found');
            }
        });
        // update the book if no error was thrown
        this.db.run(`UPDATE books SET title = ?, year = ?, price = ? WHERE id = ?`, [title, year, price, id], (err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    deleteBook(id) {
        // check if the book exists
        this.db.get(`SELECT * FROM books WHERE id = ?`, [id], (err, row) => {
            if (err) {
                console.log(err);
            }
            if (!row) {
                throw new Error('Book not found');
            }
        });
        // delete the book if no error was thrown
        this.db.run(`DELETE FROM books WHERE id = ?`, [id], (err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    selectAllBooks() {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM books`, (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows.map(row => {
                    return new Book(row.title, row.author, row.yearOfPublication, row.price);
                }));
            });
        });
    }
}

module.exports = LibraryDAO;