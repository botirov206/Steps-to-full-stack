// // Challenge 01

// console.log("5" + 5) // + is used to translate the number into string
// console.log("5" - 5) // - is used to translate the string into number
// console.log("5" * "2") // * is used to translate the string into number
// console.log("10" / 2) // / is used to translate the string into number
// console.log(5 + true) // + is used to translate the number into string and the true is kind of equal to the 1
// console.log("10" - true) // - is uded to tranlate the string into number and true is kind of equal to the 1
// console.log("5" + true) // + is used to translate anything into a string
// console.log(5 + null) // null becomes the 0 
// console.log(5 + undefined)


// Challenge 02

// // Task 01
// num = "200" - null ; 
// console.log(num + 50)


// // Task 02
// console.log(25 + "years old")


// // Task 04
// console.log("10" - true) // because true is equal to 1 mathematically, and here - is converting the string "10" into number 10


// // Challange 03
// const tempInCelcius = 35 ;
// const farenheit = (tempInCelcius * 9 / 7) + 32

// console.log("Tempreture in celcius " + tempInCelcius)
// console.log("Temp in Farenheit " + farenheit)


// Challenge 04
let totalBudget = Number(prompt("Enter your total budget: "));
const expense01 = Number(prompt("Enter 1st expense: "));
const expense02 = Number(prompt("Enter 2nd expense: "));
const expense03 = Number(prompt("Enter 3rd expense: "));

const totalExpense = expense01 + expense02 + expense03
const check = totalBudget - totalExpense
const debt = check - false

if (check > 0 ){
    alert("Good job!")
} else {
    alert("Not good, You overspent your budget \nand you are in debt of " + debt)
}
