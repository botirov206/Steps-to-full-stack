/* 
    Challenge 1 - Student Grade Management System
        You have a list of students, each with their name and an array of scores.
            Calculate the average score of each student
            Determine if the student has passed (avg ≥ 50)
            Find the top-performing student

*/

const students = [
    { name: "Alice", scores: [80, 90, 100] },
    { name: "Bob", scores: [50, 60, 70] },
    { name: "Charlie", scores: [30, 40, 20] }
];

const PASSING_GRADE = 50;

const calculateStudentStats = (students) => {
    const getAverage = scores => scores.reduce((sum, score) => sum + score, 0) / scores.length;
    
    return students.reduce((stats, student) => {
        const avg = getAverage(student.scores);
        
        console.log(`Student ${student.name} ${avg >= PASSING_GRADE ? 'passed' : 'failed'} with the average grade of ${avg}.`);
        
        if (avg > stats.highestAvg) {
            stats.highestAvg = avg;
            stats.topStudent = student.name;
        }
        
        return stats;
    }, { topStudent: null, highestAvg: 0 });
};

const { topStudent, highestAvg } = calculateStudentStats(students);

if (topStudent) {
    console.log(`\nThe top-performing student is ${topStudent} with an average grade of ${highestAvg}.`);
}
