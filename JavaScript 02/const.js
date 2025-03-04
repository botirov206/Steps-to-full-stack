const pi = 3.14
// pi = 3.1415 // Error can't be re-assign
console.log(pi)

// Block scope example

if (true){
    const greeting = "Hi";
    console.log(greeting)
}
// console.log(greeting) // Error, greeting is not defined in outside

// Tricky part

const person = { name: "Alice"};
person.name = "Bob";  // This is allowed, The objects properties can change
// person = {name: "Muhammad"}; // Error, can't re-assign the whole object
console.log(person)

// Use case

const maxLives = 3;
function playGame(){
    console.log("You have " + maxLives + " lives.")
}
playGame()

// for objects/arrays where the reference stay the same but the contents can change

const scores = [10,20,30];
scores.push(40);
console.log(scores)
