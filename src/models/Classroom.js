class Classroom{
    constructor(studtens){
        this.students = studtens;
    }


    getTopperByTotalMarks(){
    
        let topper = this.students[0];

        for(let i = 1; i < this.students.length; i++){
            if(this.students[i].getTotalMarks() > topper.getTotalMarks()){
                topper = this.students[i];
            }

        }
        return topper;
    
    }
}

export default Classroom;