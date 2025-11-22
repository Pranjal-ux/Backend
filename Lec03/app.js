const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("views",ejs)
app.get("/", function (req, res) {
    res.send("Home page")
})
app.listen(3000)