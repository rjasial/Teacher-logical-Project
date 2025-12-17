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

const headers = headersLine.split(",");

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
const values = row.split(",");
//console.log(values);
const id = Number(values[0]);
const name = values[1];
const marks = {};
for (let i = 2; i < headers.length; i++) {
    const subject = headers[i];
    const score = Number(values[i]);
    marks[subject] = score;
}
return new Student(id, name, marks);
});

// console.log("Total Students:", students.length);
// console.log("First Student:", students[0]);
// console.log(students[students.length-1]);


const classroom = new Classroom(students);
//console.log(classroom.students.length);

const topper = classroom.getTopperByTotalMarks();
console.log("Topper:", topper.name);
console.log("Topper total:", topper.getTotalMarks());
//console.log(students[25]);