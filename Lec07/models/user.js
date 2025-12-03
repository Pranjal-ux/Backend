const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:3000/textapp")
const userSchema = mongoose.Schema({
    name: String,
    image: String,
    email: String
})
mongoose.model('user','userSchema')