"use strict";
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/book.db', (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    console.log('Succesfully connected to database.');
})

createTables(db);

function createTables(db) {
    db.run('CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY, title TEXT, author TEXT, yearOfPublication INTEGER, price REAL)', (err) => {
        if (err) {
            console.error(err.message);
            throw err;
        }
        console.log('Succesfully created table books.');
    })
}

module.exports = {db};