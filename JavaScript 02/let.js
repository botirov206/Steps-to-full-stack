let fruit = 'apple';
fruit = 'banana';
// let fruit = 'strawberry'; // SyntaxError: Identifier 'fruit' has already been declared
console.log(fruit); 


if (true) {
  let animal = 'dog';
  console.log(animal);
}
// console.log(animal); // ReferenceError: animal is not defined


// use case

let score = 0;
for (let i = 0; i < 3; i++) {
  score += 1;
}
console.log(score); 


// another use case

console.log(hello)
let hello = "Hello world!"

console.log(hi)
var hi = "Hi world!"