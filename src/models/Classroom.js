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
        return (total/this.students.length).toFixed(2);
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


}


export default Classroom;