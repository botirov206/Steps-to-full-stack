/**
 * Function to calculate the average grade of the class
 * This function takes an array of scores and returns their average
 */
function getAverage(scores) {
    let sum = 0;
    const arrayLength = scores.length;

    // Loop through the array and add each score to the sum
    for (const score of scores) {
        sum += score;
    }

    // Return the average grade
    return sum / arrayLength;
}

/*
 * Function to convert numerical grades to letter grades
 * This function takes a numerical score and returns the corresponding letter grade
 * based on a standard grading scale.
*/
function getGrade(score) {
    if (score === 100) {                       // Perfect score gets A++
        return "A++";
    } else if (score <= 99 && score >= 90) {   // Scores from 90-99 get an A
        return "A";
    } else if (score <= 89 && score >= 80) {   // Scores from 80-89 get a B
        return "B";
    } else if (score <= 79 && score >= 70) {   // Scores from 70-79 get a C
        return "C";
    } else if (score <= 69 && score >= 60) {   // Scores from 60-69 get a D
        return "D";
    } else if (score <= 59 && score >= 0) {    // Scores below 60 get an F
        return "F";
    } else {
        return "Invalid Score";    // Returns for scores outside valid range (0-100)
    }
}

/*
 * Function to display wether the student passed or failed, this could calculate individual student scores, or respond to class averages
 * This function is the easy way to check if a student has a passing grade or not.
 * Using booleans true and false for better scalability.
*/
function hasPassingGrade(score) {
    let grade;
    
    // Handle both numerical and string grade inputs
    if (typeof score === 'number') {
        grade = getGrade(score);
    } else if (typeof score === 'string') {
        grade = score.toUpperCase();
    } else {
        return false;
    }

    // Define passing grades
    const passingGrades = ["A++", "A", "B", "C", "D"];
    
    // Check if the grade is in our list of passing grades
    if (passingGrades.includes(grade)) {
        return true;
    }
    
    // If grade is not in passing grades list, it's either F or Invalid
    return false;
}

// Test examples
const firstExample = getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]);
const secondExample = getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]);

// Convert the numerical class averages to letter grades
const firstLetterExample = getGrade(firstExample);
const secondLetterExample = getGrade(secondExample);

// Checking letter grades wether they are passing or failing
const firtsPassingGrade = hasPassingGrade(firstLetterExample)
const secondPassingGrade = hasPassingGrade(secondLetterExample)

// Output results
console.log(firstExample);
console.log(secondExample);

console.log(firstLetterExample);
console.log(secondLetterExample);

console.log(firtsPassingGrade)
console.log(secondPassingGrade)
console.log(hasPassingGrade(91))
