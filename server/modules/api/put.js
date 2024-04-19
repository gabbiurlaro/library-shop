const LibraryDAO = require("../db/bookDao.js");
const { db } = require('../db/db.js');

function createPutApi(app) {
  // modify a book given his unique id
  app.put("/books/:id", async (req, res) => {
    return res.status(404).json({ error: "Not implemented" });
  });
}

module.exports = { createPutApi };