const express = require('express') //This line we setup our basic express app
const path = require('path') // path is use for completing the dependices
const app = express()

//This two line use for form authenticarion
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs") // This line help us rendening the ejs pages
app.use(express.static(path.join(__dirname, 'public')))// This line help us to use staic-file like images,fonts,video etc....
app.get("/", function (req, res) { // this is basic route
    res.render("index")
})
app.get("/profile/:username", function (req, res) { // this is Dynamic route
    res.send(`welcome,${req.params.username}`)
})
app.listen(3000) // this is the basic localHost server


