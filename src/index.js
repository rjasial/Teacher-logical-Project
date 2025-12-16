import fs from "fs";

const data = fs.readFileSync("./data/Students_Score.csv", "utf-8");
console.log(data);