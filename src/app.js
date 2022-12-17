const express = require("express")
const PostRouter = require("./PostData")
const app = express()
const fileupload = require("express-fileupload")
app.use(fileupload({
    useTempFiles : true
}))
const cors = require("cors");
app.use(cors());

app.use("/",PostRouter)
module.exports = app