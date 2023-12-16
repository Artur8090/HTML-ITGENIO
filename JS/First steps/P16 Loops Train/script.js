/*
let s = prompt("Write a number");
let sum =0;
let ran =0;
while(sum < s){
    ran = Math.round((Math.random())*15-5)
    sum += ran;
    console.log(sum);
};

let quest = prompt("Как у тебя дела?");
let problems = 0;
while(quest != "спасибо"){
    quest = prompt("Как у тебя дела?");
    problems++;
}; 
console.log("Всегда рада помочь, вы высказали ", problems, "проблем");

let temp = prompt("Write the current temperature");
let days = 0;
while (temp < 25){
    temp = prompt("write the current temperature");
    days++;
}
console.log(Math.floor(days/7));

let number = +prompt("Write some numbers, when youre done write 0");
let sum = 0;
let amount = 0;
while (number != 0){
    sum += number;
    number = +prompt("Write some numbers, when youre done write 0");
    amount++;
}
console.log(sum/amount)

let grocerie = +prompt("How much does this cost?, when youre done write 0");
const sale = 0.05;
let sum = 0;
while (grocerie != 0){
    if(grocerie > 2000){
        sum += (grocerie * sale);
    };
    sum += grocerie;
    grocerie = +prompt("How much does this cost?, when youre done write 0");
};
console.log(sum);
*/
let number = prompt("write a number");
let factorial = 1;
while(number != 0){
    factorial *= number;
    number--;
}
console.log(factorial);