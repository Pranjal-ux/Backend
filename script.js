//Function
//Array and object
// functions returns
// asyc js coding



// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach((valu) => {
//     console.log(valu + " hello");

// })
// let newArr = arr.map((val) => {
//     return val + 13;
// })
// console.log(newArr);;
// let ans = arr.filter((val) => {
//     if (val < 3) {
//         return true;
//     }

// })
// console.log(ans);
// let ans = arr.find((val) => {
//     if (val === 2)
//         return val;

// })
// console.log(ans);


//OBJECT

// let obj = {
//     name: "pranjal",
//     age: 20,
//     hobby: "Basketball"
// }
// Object.freeze(obj);
// obj.age = 29


// function abc() {
//     return "Jian ho"
// }

// let ans = abc();

//ASYNN JS DEFINATION

// JO bhi code async nature ka ho usse ek side stach me bhej do. Aur agle  code ko chalo jo sync nature ka ho jabbhi sare code chal jaye tab check karo async wala code complete hua hai ya nahi agar complete hogaya ho to usse main stack me add kardo..
async function abc() {
    let blob = await fetch(`https://randomuser.me/api/`)
    let ans = blob.json();
    console.log(ans);

}
abc();