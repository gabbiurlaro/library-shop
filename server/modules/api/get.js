const LibraryDAO = require("../db/bookDao.js");
const { db } = require('../db/db.js');

function createGetApi(app) {
    app.get("/books", async (req, res) => {
    try {
        const bookList = await new LibraryDAO(db).selectAllBooks();
        console.log(bookList[0]);
        const message = bookList.map((book) => {
        return {
            title: book.title,
            author: book.author,
            year: book.yearOfPublication,
            price: book.price,
        };
        });
        return res.status(200).json(message);
    } catch (err) {
        console.log("error: " + err);
        return res.status(500).json({ error: err });
    }
    });

    // get a book based on his unique id
    app.get("/books/:id", async (req, res) => {
    return res.status(404).json({ error: "Not implemented" });
    });

}

module.exports = { createGetApi };