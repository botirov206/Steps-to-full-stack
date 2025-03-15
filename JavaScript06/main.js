// let array = new Array(5);
// console.log(array.length)

// // we can create a new array by using an new Array
// let array01 = new Array(1, 2, 3, 4, 5);
// console.log(array01)


// // by three dots( ... ) we can actually copy that array and can have a any modifications that we want
// let array02 = [1, 2, 3, 4, 5];
// console.log(array02)
// let copy = [... array02 ]
// console.log(copy)

// // here is taking the copy of the set as a copy
// let array03 = [...new Set([1, 2, 3, 4, 5, "B"])]
// console.log(array03)

// let pushed = array02.push(1, 4, 5, "h");
// console.log(pushed)

// let hello = "hello world";
// console.log(hello.length)

// // 7th exercise

// function swapCase(strings = ""){
//     let swapped = "";
//     for (let string of strings){
//         if (string >= "A" && string <= "Z"){
//             swapped += string.toLowerCase();
//         } else if (string >= "a" && stirng <= "z"){
//             swapped += string.toUpperCase();
//         } else {

//         }
//     }

//     return strings; 

// }

// console.log(swapCase("The Quick Brown Box"))




const cart = [
    { id: 1, name: "Laptop", price: 900, quantity: 1 },
    { id: 2, name: "Mouse", price: 35, quantity: 1 },
    { id: 3, name: "Keyboard", price: 45, quantity: 1 },
    { id: 4, name: "MousePad", price: 10, quantity: 3 },
    { id: 5, name: "Monitor", price: 200, quantity: 1 },
]

function calcCart(cart){
    let totalExpence = 0;
    let maxPrice = 0;
    
}