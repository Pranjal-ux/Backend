const cookieParser = require('cookie-parser')
const express = require('express')
const bcrypt = require('bcrypt')
const app = express()
let jwt = require('jsonwebtoken')
app.use(cookieParser())
app.use(express.json())
// app.get("/", (req, res) => {
//     res.cookie("name", "pranjal")
//     res.send("done")
// })
// app.get("/read", (req, res) => {
//     console.log(req.cookies)
//     res.send("read page")
// })


//bcrypt insitiallisation-1

// app.get("/", (req, res) => {
//     bcrypt.genSalt(10, function (err, salt) {

//         bcrypt.hash("omnitrix", salt, function (err, hash) {
//            // Store hash in your password DB.
//             console.log(hash)
//         });
//     });
// })

//bcrypt insitiallisation-2

// app.get("/", (req, res) => {
//     bcrypt.hash("omnitrix", 10, function (err, hash) {
//         console.log(hash)
//     })
// })

//bcrypt comparision

// app.get("/", (req, res) => {
//     bcrypt.compare("omnitrix", "$2b$10$bMr19MZ1YgXc2tIHiTQNMuCEyxVvrOUuDBvq5guBo4lEJEb8p8iZq", ((err, result) => {
//         console.log(result)
//     }))
// })

//Json web token
app.get("/", function (req, res) {
    let token = jwt.sign({ email: "pranjal@test.com" }, "secret")
    res.cookie("token", token)
    res.send("Set cookie")
})
app.get("/read", function (req, res) {
    let data = jwt.verify(req.cookies.token, "secret")
    res.send(data)
})


app.listen(3000)