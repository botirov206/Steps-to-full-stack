# Getting started with JavaScript

## var is the old way of declaring a variable

### Key features

Can be reassigned
Can be re-declared
Get hoisted (declaration moves to the top, but not the value)

### Use case

Old codebases used var a lot. For example, if you’re writing a simple script and don’t care about scope rules
[var File](var.js)

## let more predictible, safer and newer way of declaring a variable

### Key features

Can be reassigned
Cannot be re-declared
No weird hoisting issues (you can't use it before declaring it)

### Use case
We should use the let when we expect a value to change, like in the loop or when tracing something that updates
[let file](let.js)

## Const (Constant) for variables that won't change

### Key featues 

Cannot be re-assigned
Cannot be re-declared
Must be assigned a value not empty

### Use case

We must use the const for values that shouldn't change, like settings or fixed data.
But that doesn't mean that value itself can't change, it can change like with objects or arrays
[const file](const.js)

## Type Coercion (Implicit Convercion)

Type Coercion happens automatically when the JS is converts a one value to another during an operation.

+ prefers for the String Concatenation, converting number into strings.
-, *, and / for the numeric operation, converting string into numbers.

Rule: if there is a String like in the example: 
console.log("5" + 2) it is going to cancatenate

if there is not a String, jsut only numbers like in the example:
console.log(20 + 50) is ig going to be added

## Type Conversion (Explicit Conversion)

Type Conversion is when you manually change a data type by using JS functions.

[type coercion exercises] (type_coercion.js)
