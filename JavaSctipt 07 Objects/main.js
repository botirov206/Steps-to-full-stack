/* 
    1. Object literal ({})

    Directly defines key-value pairs inside the curly braces
    Usefull for static or single-instance objects
*/ 

// let helloWorld = {
//     name: "Muhammadali",
//     surname: "Botirov",
//     age: 18,
//     email: "botirovali206@gmail.com",
//     password: 12345678,
//     salom: function(){
//         // return "Assalomu alaikum mening ismim " + this.name + " hamda men " + this.age + " yoshdaman" ;
//         return `Assalomu alaikum mening ismim ${this.name}, hamda men ${this.age} yoshdaman` ;
//     }
// }

// console.log(helloWorld.name)
// console.log(helloWorld.age)
// console.log(helloWorld.salom())
// console.log(helloWorld)


/* 
    2. Using new Object

    Creates new Object by JS built-in Object constructor 
    Same as the Object literals but allows dynamic property assignment
*/

// let person = new Object();
// person.name = "Muhammadali";
// person.surname = "Botirov";
// person.age = 18;
// person["user password"] = "qwerty123";
// person.greet = function(){
//     return `Hello there my name is ${this.name}.`
// }

// console.log(person.greet())
// console.log(person)


/* 
    3. Factory function

    Uses a function that returns an Object
    Creates multiples Objects with similar properties
*/

// function createPerson(name, surname, age){
//     return {
//         name,
//         surname,
//         age,
        
//         greet() {
//             return `Hello there my name is ${this.name}, my surname is ${this.surname}, and I'm ${this.age} years old.` ;
//         }
//     }
// }

// let user1 = createPerson("Ali", "Botirov", 18)
// let user2 = createPerson("Abbos", "Jahonov", 15)
// let user3 = createPerson("Diyor", "Umirshaykhov", 30)

// console.log(user1.greet())
// console.log(user2.greet())
// console.log(user3.greet())



/* 
    4. Constructor Function


*/

// function person(name, age){
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         return `Hello there my name is ${this.name}` ;
//     }
// }

// let person01 = new person("Muhammadali", 18)
// console.log(person01)
// console.log(person01.greet())



/* 
    5. Using Object.create
*/

// 1st example
// let animal = {
//     type: "Mammal",
//     makeSound(){
//         console.log("Some generic animal sound");
//     }
// };
// let dog = Object.create(animal);
// dog.breed = "Golden Retriever";

// console.log(dog.type)
// console.log(dog)
// dog.makeSound()

// 2nd example
// const personProto = {
//     greet(){
//         console.log(`Hi, I'm ${this.name}`);
//     }
// }

// const bob = Object.create(personProto, {
//     name: {value: "Bob", writable: true},
//     age: {value: 30, writable: false}
// })

// bob.greet();
// bob.age = 31; // the age is not going to be changed because of the writable is false
// console.log(bob.age); // the age is going to remain the same 
// bob.name = "Ali"; // name is going to change 
// console.log(bob.name)
// console.log(bob)



/* 
    6. Using E6 class

*/

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         return `Hello, my name is ${this.name}`;
//     }
// }

// let user01 = new Person("Muhammadali", 19);
// console.log(user01.greet())



/* 
    7. Object freeze

*/

// const config = Object.freeze({
//     theme: "dark",
//     version: "1.0.0"
// });

// config.theme = "light";
// console.log(config.theme)



// some related things

// computed properties
// let key = "score";
// let student = {[key]: 95};
// console.log(student)



