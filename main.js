class Student {

    name;
    surname;
    yearOfBirh;
    points = [];


   
    constructor (name, surname, yearOfBirh) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirh = yearOfBirh;
        
    }

    getAgeStudent () {
        const age = new Date().getFullYear() - this.yearOfBirh;
        return console.log("Вік студента " + age);
    }

    addPoints (point) {
        if (point) {
            this.points.push(point);
            return this.points;
        }
    }

    getAvaragePoint () {
    
        const getAverage = this.points.reduce((total, points) => total + points, 0) / this.points.length;
        return getAverage; 
    }
    


    visitingStudent = [];

    

    present () {
        if (this.visitingStudent.length < 25) {
            this.visitingStudent.push(true); 
           return this.visitingStudent;
        } else {
            return this.visitingStudent;
        }
        
        
    }


    absent () {
        if (this.visitingStudent.length < 25) {
            this.visitingStudent.push(false); 
            return this.visitingStudent;
         } else {
             return this.visitingStudent;
         }
    }


    getAvarageVisiting () {
    
        const getAverage = this.visitingStudent.reduce((total, visit) => total + visit, 0) / this.visitingStudent.length;
        return  getAverage; 
    }


    summary () {
        if (this.getAvaragePoint() >= 90 && this.getAvarageVisiting() >= 0.9) {
            return console.log("Молодець!");
        } 
        
        else if (this.getAvaragePoint() < 90 && this.getAvarageVisiting() >= 0.9 || this.getAvaragePoint() >= 90 && this.getAvarageVisiting() < 0.9) {
            return console.log("Добре, але можна краще!");
        } 
        
        else if(this.getAvaragePoint() < 90 && this.getAvarageVisiting() < 0.9) {
            return console.log("Редиска!");
        }

    }


} 

const student = new Student ("John", "Li", "1999");

student.getAgeStudent();

student.addPoints(89);
student.addPoints(75);
student.addPoints(100);
student.addPoints(93);
student.addPoints(100);
student.addPoints(95);


console.log("Середній бал студента " + student.getAvaragePoint());

student.present();
student.present();
student.present();
student.present();
student.present();
student.absent();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();

console.log("Середнє відвідування " + student.getAvarageVisiting());

student.summary();


const student2 = new Student ("Jesica", "Dou", "1997");

student2.getAgeStudent();

student2.addPoints(89);
student2.addPoints(75);
student2.addPoints(100);
student2.addPoints(62);


console.log("Середній бал студента " + student2.getAvaragePoint());

student2.present();
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();


console.log("Середнє відвідування " + student2.getAvarageVisiting());

student2.summary();