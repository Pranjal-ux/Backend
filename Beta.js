const express = require('express');

const app = express();

app.use(function (req, res, next) {
    console.log("Middleware chala");
    next();
});
app.use(function (req, res, next) {
    console.log("Middleware phirse chala");
    next();
});


app.get("/", function (req, res) {
    res.send("First routing done and we update the value")
})
app.get("/about", function (req, res, next) {
    return next(new Error("something went wrong"))
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
app.listen(3001);