/*
let a = +prompt("Write a number for A");
let b = +prompt("Write a number for B");
let op = prompt("What operation do you want to do? + , - , * , /")
switch(true){
    case op == "+":
        alert(a+b);
    break;
    case op == "-":
        alert(a-b);
    break;
    case op == "*":
        alert(a*b);
    break;
    case op == "/":
        alert(a/b);
    break;
    default:
        alert("Undifined");
}
*/
/*
let dayNumber = new Date().getDay();
let day;
switch(true){
    case dayNumber == 0:
        day = "Воскресение"
    break;
    case dayNumber == 1:
        day = "Понедельник"
    break;
    case dayNumber == 2:
        day = "Вторник"
    break;
    case dayNumber == 3:
        day = "Среда"
    break;
    case dayNumber == 4:
        day = "Четверг"
    break;
    case dayNumber == 5:
        day = "Пятьница"
    break;
    case dayNumber == 6:
        day = "Суббота"
    break;

}
alert(day);
*/
/*
let age = prompt("What is your age?");
    switch(true){
    case age >= 0 && age < 13:
        alert("Ребёнок");
    break;
    case age >= 13 && age < 18:
        alert("Подросток");
    break;
    case age >= 18 && age < 60:
        alert("Взрослый");
    break;
    case age >= 60 && age < 110:
        alert("Пожилой");
    break;
    case age >= 110:
        alert("Ходящий мертвец");
    break;
    default:
        alert("Невозможно!");
    }
    */
/*
let direct = prompt("Give directions, forward, backward, left & right");
let hor = 0;
let ver = 0;

switch(true){
    case direct == "forward":
        ver = ver + 1;
    break;
    case direct == "backward":
        ver = ver - 1; 
    break;
    case direct == "left":
        hor = hor + 1; 
    break;
    case direct == "right":
        hor = hor + 1; 
    break;
};
console.log("x=",hor,"y=", ver);
*/
/*
let num = +prompt("Write a number");
switch(true){
    case num % 3 == 0 && num % 5 == 0:
        console.log("FizzBuzz");
    break;
    case num % 3 == 0 && num % 5 !== 0:
        console.log("Fizz");
    break;
    case num % 5 == 0 && num % 3 !== 0:
        console.log("buzz");
    break;
    default:
        console.log("Not dividable by 3 & 5")
}
*/
let date = get.date();
let time = date.getHours();
switch(true){
    case time >= 6 && time <= 10:
        console.log("Доброе утро");
    break;
    case time > 10 && time <= 18:
        console.log("Добрый день");
    break;
    case time > 18 && time <= 24:
        console.log("Добрый вечер");
    break;
    default:
        console.log("Доброй ночи")

}