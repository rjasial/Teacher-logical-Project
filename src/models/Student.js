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
}

export default Student;