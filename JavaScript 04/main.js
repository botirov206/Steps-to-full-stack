// conditional Statements
// if statement
let number = 10;
if (number > 5) {
    console.log('The number is biggeer than 5');
}

// else if/else statement
let age = 20;
if (age >= 18 ) {
    console.log('You can vote');
} else if (age >= 16) {
    console.log('You can drive');
} else {
    console.log('You can do nothing');
}

// switch statement
let day = 2;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    default:
        console.log('Invalid day');
}


// loops
for (let i = 0; i < 5; i++) {
    console.log("Count is: " + i);
}

// while loop
let i = 0;
while (i < 5) {
    console.log("Count is: " + i);
    i++;
}

