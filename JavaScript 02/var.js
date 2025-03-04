var name = "Alice";
// name = "Bob";
console.log(name);
var name = "Charlie";

console.log(age);
var age = 30;

// Use case
function sayHello() {
    var greeting = "Hello";
    if (true) {
      var greeting = "Hi"; // Overwrites the outer one!
    }
    console.log(greeting); // Output: Hi
}

sayHello();