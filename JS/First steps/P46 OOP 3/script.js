class User{
    #salary
    static retirementAge = 65;
    constructor(name, time, salary, age){
        this.name = name
        this.time = time
        this.#salary = this.#checkSalary(salary,time)
        this.age = this.#checkAge(age)
    }
    setSalary(salary){
        this.#salary = salary
    }
    #checkSalary(time, salary){
        if(time == 0){
            salary = 0;
        }
        return salary;
    }
    #checkAge(age){
        if(User.retirementAge <= age){
            this.setSalary(0)
            return age = 'You are retired and unable to get paid';
        } else{
            return age;
        }
    }
}

let Vova = new User('Вова', 30, 4000, 35)
let Vanya = new User('Ваня', 0, 5000, 40)
let DedDedov = new User('Дед Дедов', 1000000, 900000000, 345)
Vova.setSalary(4001)
console.log(Vova)
console.log(Vanya)
console.log(DedDedov)

class Person{
    constructor(name, age){
        this.name = name
        this.age = this.#checkAge(age)
    }
    #checkAge(age){
        if(age >= 16 && age <= 80){
            return age
        } else{
            return undefined;
        }
    }
}
const tom = new Person('Tom', 90)
const mary = new Person('Mary', 20)

console.log(tom,mary)