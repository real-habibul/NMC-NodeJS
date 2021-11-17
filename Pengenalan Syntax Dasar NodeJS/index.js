// var
// var greeter = "hey hay";
// var greeter = "hey halo";
// console.log(greeter);

// // let
// let greeter2 = "hey hay";
// let status = true;
// if (status = true) {
//     let greeter2 = "hey halo";
// } 
// console.log(greeter2);

// const
// const greeter3 = "hey hay";
// greeter3 = "hey halo";
// console.log(greeter3)

// flow for
let angka = ""
// for (let i = 0; i < 9; i++) {
//     { angka = angka + i}
// }
// console.log(angka)

// while
// while (angka < 9) {
//     angka++
//     console.log(angka);
// }

// do while
// i = 0;
// do {
//     i = i + 1;
//     angka = angka + i
// } while (i < 9)
// console.log(angka);

// function testNum(a) {
//     let angka
//     if (a > 0) {
//         angka = "positive"
//     } else {
//         angka = "negative"
//     }
//     return angka
// }
// console.log(testNum(2))

// const fruit = "Mangos"
// switch (fruit) {
//     case "Oranges":
//         console.log("1Kg Oranges are 15.000 IDR")
//         break;
//     case "Mangos":
//         console.log("1Kg Mangos are 20.000 IDR")
//         break;
//     case "Papayas":
//         console.log("1Kg Papayas are 9.000 IDR")
//         break;

//     default:
//         console.log("Sorry, Out Of Order")
//         break;
// }

let fruits = ["banana", "mango", "papaya"]
// console.log(fruits[2])

// if (fruits.length > 0) {
//     console.log(fruits)
// } else {
//     console.log("Data Kosong")
// }

// fruits.forEach( function(item, index, array) {
//     console.log(item, index)
// });

let addFruit = fruits.unshift("Lemon")
addFruit = fruits.pop()
addFruit = fruits.push("Orange")

console.log(fruits)
