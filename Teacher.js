
     
        class Teacher extends Student{
                Constructor(id,Name,num,Email,Salary,subjects ){
                super(id,Name,num,Email)
               this.Salary=Salary;
               this.subjects=subjects;
        }
        Salary(){
            return (Salary);
        }
        subjects(subjects){
            
        }
    }
let teacher = new Teacher("65412","anas","anas.@SpeechGrammarList.com","07777777777");
console.log(teacher.Salary());
console.log(teacher.subjects());
