// const { log } = require('console');
const fs = require('fs');
// fs.writeFile("js.txt", "this is the js ", function (err) {
//     if (err) console.log(err);
//     else console.log("done")
// })
// fs.appendFile("js.txt", " And we learn node js", function (err) {
//     if (err) console.log(err);
//     else console.log("done")
// })
// fs.rename("js.txt", " hello.txt", function (err) {
//     if (err) console.log(err);
//     else console.log("done")
// })
// fs.copyFile("new.txt", "./copy/gg.txt", function (err) {
//     if (err) console.log(err);
//     else console.log("done")
// })
// fs.unlink("new.txt", function (err) {
//     if (err) console.log("error caught", err);
//     else console.log("removed");
// })
// fs.writeFile("new.txt", "I'm here to learn", function (err) {
//     if (err) console.log(err);
//     else console.log("done")
// })
fs.rmdir("./copy", { recursive: true }, function (err) {
    if (err) console.log(err);
    else console.log("remove")
})