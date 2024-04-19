const LibraryDAO = require("../db/bookDao.js");
const { db } = require('../db/db.js');

function createDeleteApi(app) {
    app.delete("/books/:id", async (req, res) => {
        return res.status(404).json({ error: "Not implemented" });
    });
}

module.exports = { createDeleteApi };