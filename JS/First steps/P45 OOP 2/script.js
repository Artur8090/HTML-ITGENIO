class Student {
    constructor(name, surname, year){
        this.name = name
        this.surname = surname
        this.year = year
    }
    getFullName(){
        return `${this.name} ${this.surname}`;
    };
    
    getCourses(){
        return 2021 - this.year
    };
}

let student = new Student('Иван','Иванов', 2018)
console.log(student.name)
console.log(student.surname)
console.log(student.getFullName())
console.log(student.getCourses())