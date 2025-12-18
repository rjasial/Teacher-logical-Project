class Classroom{
    constructor(studtens){
        this.students = studtens;
    }


    getTopperByTotalMarks(){
    
        let topper = this.students[0];

        for(let student of this.students){
            if(student.getTotalMarks() > topper.getTotalMarks()){
                topper = student;
            }

        }
        return topper;
    
    }

    getSubjectAverage(subject){
        let total = 0;
        for(let student of this.students){
            total += student.marks[subject];
        }
        return Number((total/this.students.length).toFixed(2));
    }

    studentRanking(){
        
        let rankingList = [];
        rankingList.push(...this.students);
       
        for(let i = 0; i < rankingList.length; i++){
            for(let j = i+1; j < rankingList.length; j++){
                if(rankingList[i].getTotalMarks() < rankingList[j].getTotalMarks()){
               

                   let temp = rankingList[i];
                     rankingList[i] = rankingList[j];
                        rankingList[j] = temp;
                
                }
            }
          
            
        }
        return rankingList;      
    }

    overAllAverage(){
        let total = 0;
        for(let student of this.students){
            total += student.getPercentage();
        }
        return (total/this.students.length).toFixed(2);
    }

    getAllSubjectsAverages(){
        const subjects = Object.keys(this.students[0].marks);
        const averages = {};

    for(let subject of subjects){
        averages[subject] = this.getSubjectAverage(subject);
    }
    return averages;

}

studentStrengthWeakness(name){
    const averages = this.getAllSubjectsAverages();
    for(let student of this.students){
        if(student.name === name){
            const strongSubject = [];
            const weakSubject = [];
           for(let subject in student.marks){
            
               let studentMark = student.marks[subject];
               let classAvg = averages[subject];
           let    diff = studentMark - classAvg;

                if(diff >= 10){
                    strongSubject.push(subject);
                }else if(diff <= -10){
                    weakSubject.push(subject);
                }
            
           }
           return {
            strongSubject,
            weakSubject
     };

        }
         
    }
}

}


export default Classroom;