function Dog(breed, name){
    this.breed = breed;
    this.name = name;
}

let puppy = new Dog('labrador','Lutik');

Dog.prototype.intro = function(){
    document.write(`<i>Привет меня все называют <b><span id="green">${this.name}</span></b> и я породы <span id='pink'>${this.breed}</span></i>`)
}

puppy.intro()

function User(name, age){
    this.name = name
    this.age = age
    this.set_direction = function(direction){
        this.direction = direction
    }
}

function Direction(subject, skill){
    this.subject = subject
    this.skill = skill
}

let js = new Direction('JavaScript','programming, skill2, skill3')
let photoshop = new Direction('photoshop','photo editing, skill2, skill3')

let Vanya = new User('Ваня','12');
let Vova = new User('Вова','13')

User.prototype.introduce = function(){
    document.write(`<br> Студент ${this.name}: Направление ${this.direction.subject}: Навыки ${this.direction.skill}`)
}
Vanya.set_direction(js)
Vanya.introduce()

Vova.set_direction(photoshop);
Vova.introduce()
