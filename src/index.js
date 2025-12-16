import fs from "fs";
import Student from "./models/Student.js";


const student1 = new Student(1, "John", 
    {
        Math: 78,
        Physics: 65,
        Chemistry: 82,
        English: 74,
        Hindi: 69,
        SocialScience: 71,
        CS: 88
    });

    console.log(`Total Marks of ${student1.name}: ${student1.getTotalMarks()}`);




// const data = fs.readFileSync("./data/Students_Score.csv", "utf-8");
// console.log(data);