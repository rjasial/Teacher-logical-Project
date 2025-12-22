import fs from "fs";
import Student from "./models/Student.js";
import Classroom from "./models/Classroom.js";


// const student1 = new Student(1, "John", 
//     {
//         Math: 78,
//         Physics: 65,
//         Chemistry: 82,
//         English: 74,
//         Hindi: 69,
//         SocialScience: 71,
//         CS: 88
//     });

//console.log(`Total Marks of ${student1.name}: ${student1.getTotalMarks()}`);




 const csvText = fs.readFileSync("./data/Students_Score.csv", "utf-8");
//console.log(csvText.slice(0, 200)); 

const lines = csvText.trim().split("\n");
 //console.log("lines:", lines.length);

//console.log("first line:", lines[0]);

//console.log("second line:", lines[1]);

const headersLine = lines[0];
const dataLines = lines.slice(1);

const headers = headersLine.split(",").map(h => h.trim())
 //console.log("headers:", headers);
//console.log("dataLines:", dataLines);
// console.log("first student row:", dataLines[0]);

const firstRow = dataLines[0];
const firstRowValues = firstRow.split(",");
//console.log("firstRowValues:", firstRowValues);

//const id = Number(firstRowValues[0]);
//const name = firstRowValues[1];
//console.log("id:", id, "name:", name);


// const marks = {};
// for (let i = 2; i < headers.length; i++) {
//     const subject = headers[i];
//     //console.log("subject:", subject);
//     const score = Number(firstRowValues[i]);
//     //console.log("score:", score);
//     marks[subject] = score;
// }

//console.log("marks:", marks);


// const student1 = new Student(id, name, marks);
// console.log(student1)
// console.log("Total: ", student1.getTotalMarks());


const students = dataLines.map((row) => {
const values = row.split(",").map(v => v.trim())
//console.log(values);
const id = Number(values[0]);
const name = values[1];
const marks = {};
for (let i = 2; i < headers.length; i++) {
    const subject = headers[i];
     // Adjusting subject name if needed
    const score = Number(values[i]);
    marks[subject] = score;
}
return new Student(id, name, marks);
});


const subjects = headers.slice(2);
console.log("SUBJECTS LIST:", subjects);




// console.log("Total Students:", students.length);
 //console.log("First Student:", students[0]);
// console.log(students[students.length-1]);


const classroom = new Classroom(students, subjects);
//console.log(classroom.students.length);


const firstSubject = subjects[0];
const avg = classroom.getSubjectAverage(firstSubject);

console.log("First Subject:", firstSubject);
console.log("Average:", avg);


const topper = classroom.getTopperByTotalMarks();
//console.log("Topper:", topper.name);
//console.log("Topper total:", topper.getTotalMarks());
//console.log(students[25]);

const total = classroom.getSubjectAverage("Maths");
// console.log(classroom.getSubjectAverage("Maths"));
// console.log(classroom.getSubjectAverage("CS"));
// console.log(classroom.getSubjectAverage("Social Science"));


const rankingList = classroom.studentRanking();
//console.log("Ranking List:", rankingList.length);

for (let i = 0; i < 5; i++) {
    const student = rankingList[i];
    const rank = i + 1;


    //console.log(`Rank ${rank}: ${student.name} - ${student.getTotalMarks()} || Percentage: ${student.getPercentage()}% || Grade: ${student.getGrade()}`);
}

const overallAvg = classroom.overAllAverage();
console.log("Overall Class Average Percentage:", overallAvg);


const allSubjectAverages = classroom.getAllSubjectsAverages();
//console.log("All Subject Averages:", allSubjectAverages);

//console.log(classroom.studentStrengthWeakness("John"))

//console.log(classroom.studentStrengthWeakness("Kavish"));

//console.log(classroom.studentStrengthWeakness("Student_27"));
//

//Counting students above, below and equal to average in first subject
// let above = 0;
// let below = 0;
// let equal = 0;

// for(let student of classroom.students){
//     const score = student.marks[firstSubject];

//     if(score > avg){
//         above++;
//     }else if(score < avg){
//         below++;
//     } else {
//         equal++;
//     }
// }
// console.log(`Students above average in Maths: ${above}`);
// console.log(`Students below average in Maths: ${below}`);
// console.log(`Students equal to average in Maths: ${equal}`);    

// const aboveBelowStudents = classroom.getAboveBelowByAverage("CS");
// //console.log(aboveBelowStudents)



const subjectStat = [];
for(let subject of subjects){
    subjectStat.push(classroom.getAboveBelowByAverage(subject));
}

console.log(subjectStat);

//Trying to see if we can compare a student's score with class average for that subject

// const student = classroom.students[0];
// console.log(student);
// const  firstSubjectName = subjects[0];
// const averageScore = classroom.getSubjectAverage(firstSubjectName);
// const johnScore = student.marks[firstSubjectName];

// if(johnScore > averageScore){
//     console.log("above average");
// }else if(johnScore < averageScore){
//     console.log("below average");
// } else {
//     console.log("equal to average");
// }


// for(let subject of subjects){
//     const classAvg = classroom.getSubjectAverage(subject);
//     const johnScore = classroom.students[0].marks[subject];

//     if(johnScore > classAvg){
//         console.log(`John's score in ${subject} is above average.`);
//     }else if(johnScore < classAvg){
//         console.log(`John's score in ${subject} is below average.`);
//     } else {
//         console.log(`John's score in ${subject} is equal to average.`);
//     }

// }


const studentComparison = classroom.getStudentAboveBelowAverage("John");
console.log(studentComparison);