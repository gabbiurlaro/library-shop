const express = require('express')
const { createApi } = require("./modules/api/api.js")   

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// CRUD operations for books instance

// get all the available books in the library
createApi(app)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`)
})
