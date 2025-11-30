const express = require('express')
const app = express()

const usermodel = require('./usermodel')

app.get("/", function (req, res) {
    res.send("hey")
})
app.get("/create", async function (req, res) {
    let usercreate = await usermodel.create({
        name: "Pranjal",
        email: "pranjal@gmail.com",
        username: "Ben"
    })
    res.send(usercreate)
})
app.get("/update", async function (req, res) {
    // fot updating the data
    //   usermodel.findOneUpdate(findone,update,{new:true})
    let updatedUser = await usermodel.findOneAndUpdate({ username: "Ben" }, { name: "pranjal shukla" }, { new: true })

    res.send(updatedUser)
})
app.get("/read", async function (req, res) {
    // fot updating the data
    //   usermodel.findOneUpdate(findone,update,{new:true})
    let read = await usermodel.find({ username: "Benwfgeu" }) // find() is use to read all document in the database

    res.send(read)
})
app.get("/delete", async function (req, res) {

    let read = await usermodel.findOneAndDelete({ username: "Ben" }) // find() is use to read all document in the database

    res.send(read)
})
app.listen(3000)