const express = require('express')
const { createGetApi } = require("./modules/api/api.js")   

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// CRUD operations for books instance

// get all the available books in the library
createGetApi(app)

// get a book based on his unique id
app.get("/books/:id", async (req, res) => {
  return res.status(404).json({ error: "Not implemented" });
});

// insert a new book in the library
app.post("/books", async (req, res) => {
  return res.status(404).json({ error: "Not implemented" });
});

// modify a book given his unique id
app.put("/books/:id", async (req, res) => {
  return res.status(404).json({ error: "Not implemented" });
});

// delete a book given his unique id
app.delete("/books/:id", async (req, res) => {
    return res.status(404).json({ error: "Not implemented" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`)
})
