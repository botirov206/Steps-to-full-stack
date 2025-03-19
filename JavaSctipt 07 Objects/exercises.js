
/* 
    Challenge 1

    Student Grade Management System
        You have a list of students, each with their name and an array of scores.
        Calculate the average score of each student
        Determine if the student has passed (avg ≥ 50)
        Find the top-performing student

*/

const students = [
    { 
        name: "Alice",
        scores: [80, 90, 100]
    },
    { 
        name: "Bob", 
        scores: [50, 60, 70] 
    },
    { 
        name: "Charlie", 
        scores: [30, 40, 20] 
    }
]

let topStudent = null;
let highestAvg = 0;

for (const student of students){
    let totalScore = 0;
    let avg = 0;

    for (const score of student.scores){
        totalScore += score;
    }

    avg = totalScore / student.scores.length;

    if (avg > highestAvg) {
        highestAvg = avg;
        topStudent = student.name;
    }

    if (avg >= 50 && avg <= 100){
        console.log(`Student ${student.name} passed with the average grade of ${avg}.`);
    } else if(avg < 50 && avg >= 0) {
        console.log(`Student ${student.name} failed with the average grade of ${avg}.`);
    } else {
        console.log(`There are some issues with student ${student.name} average grade.`)
    }
}

if (topStudent) {
    console.log(`\nThe top-performing student is ${topStudent} with an average grade of ${highestAvg}.`);
}

// firdavs is the best 👨🏻‍🦱



