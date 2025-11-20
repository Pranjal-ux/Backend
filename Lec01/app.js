// npm init -> package.json->lekha jokha of package
const fs = require('fs')
// fs.writeFile("hey.txt", "Hanji ke haal chal", function (err) {
//     if (err) console.log(err)
//     else console.log("Done")
// })

//apend=>means adding something next to the write file

// fs.appendFile("hey.txt", " sab badhiya", function (err) {
//     if (err) console.log(err)
//     else console.log("Done")
// })

// fs.rename("hey.txt", "hello.txt", function (err) {
//     if (err) console.log(err)
//     else console.log("done")
// })
fs.copyFile("hello.txt", "./Copy/Hallo.txt", function (err) {
    if (err) console.log(err)
    else console.log("Done ")
})
fs.unlink("hello.txt", function (err) {
    if (err) console.log(err)
    else console.log("Done")
})

fs.rmdir('./Copy', function (err) {
    if (err) console.log(err)
    else console.log("Done")
})
fs.rm('./Copy', { recursive: true }, function (err) {
    if (err) console.log(err)
    else console.log("Done")
})
fs.mkdir('Create', function (err) {
    if (err) console.log(err)
    else console.log("Create")
})
fs.readFile("hey.txt", function (err) {
    if (err) console.log(err)
    else console.log("ReadingDone")
})
fs.rm('./Create', { recursive: true }, function (err) {
    if (err) console.log(err)
    else console.log("Done")
})

