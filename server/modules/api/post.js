const LibraryDAO = require("../db/bookDao.js");
const { db } = require('../db/db.js');

function createPostApi(app) {
    // insert a new book in the library
    app.post("/book", async (req, res) => {
    return res.status(404).json({ error: "Not implemented" });
    });

}

module.exports = { createPostApi };