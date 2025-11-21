const express = require('express')
const app = express();

app.use(function (req, res, next) {
    console.log("Middleware chalgaya");
    next();
});

app.get("/", function (req, res) {
    res.send("Home page");
});

app.get("/about", function (req, res) {
    res.send("Shaktiman")
})
app.get("/profile", function (req, res, next) {
    return next(new Error("Ud gaya code"));
})
app.listen(3000, () => {
    console.log("server is running")
})
app.use((err, req, res) => {
    console.log(err.stack)
    res.status(500).send("Something broke!")
})
// console.log("aaa")