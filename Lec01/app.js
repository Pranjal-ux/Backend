// npm init -> package.json->lekha jokha of package
const fs = require('fs')
// fs.writeFile("hey.txt", "Hanji ke haal chal", function (err) {
//     if (err) console.log(err)
//     else console.log("Done")
// })

//apend=>means adding something next to the write file

fs.appendFile("hey.txt", " sab badhiya", function (err) {
    if (err) console.log(err)
    else console.log("Done")
})

fs.rename("hey.txt", "hello.txt", function (err) {
    if (err) console.log(err)
    else console.log("done")
})