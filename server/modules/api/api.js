const { createGetApi } = require("./get.js")
const { createPostApi } = require("./post.js")
const { createDeleteApi } = require("./delete.js")
const { createPutApi } = require("./put.js")

function createApi(app) {
    createGetApi(app);
    createPostApi(app);
    createDeleteApi(app);
    createPutApi(app);
}

module.exports = { createApi };