class Student{
    constructor(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }

    getTotalMarks() {
        let total = 0;
        for (let subject in this.marks) {
            total += this.marks[subject];
        }
        return total;
    }


    getPercentage(){
        const totalMarks = this.getTotalMarks();
        const subjectTotal = Object.keys(this.marks).length * 100;

        const percentage = ((totalMarks / subjectTotal) * 100).toFixed(2);
        const result = Number(percentage);

        return result;
    }

    getGrade(){
        const percentage = this.getPercentage();
        if(percentage >= 90){
            return 'A';
        } else if(percentage >= 80){
            return 'B';
        } else if(percentage >= 70){
            return 'C';
        } else if(percentage >= 60){
            return 'D';
        } else {
            return 'F';
        }
    }
}

export default Student;