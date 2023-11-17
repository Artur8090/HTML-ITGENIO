/* Задание 1
let name = prompt("Напиши язык на котором написана программа");
if(name == "JS") {
    console.log("Правильно")
} else {
    console.log("Ты ввел какуюто строку")
};
*/
/* Задание 2
let num = +prompt("Напиши число")
if(num < 0) {
    console.log("-")
} else if(num > 0) {
    console.log("+")
} else {
    console.log("0")
};
*/
/* Задание 3
let num = +prompt("Напиши число");
if((num % 10) > 5) {
    console.log(">")
} else if((num % 10) < 5){
    console.log("<")
} else{
    console.log("=")
}
*/
/* Задание 4
let a = +prompt("Напиши число");
let b = +prompt("Напиши число");
let c = +prompt("Напиши число");
if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else {
    console.log(c)
}
*/

let a = +prompt("Напиши число");
let b = +prompt("Напиши число");
let c = +prompt("Напиши число");
let d = +prompt("Напиши число");
let e = +prompt("Напиши число");
let one = 0;
let two = 0;
let three = 0;
if(a < 10 && a>0){
    one +=1;
}
if(b < 10 && b>0){
    one +=1;
}
if(c < 10 && c>0){
    one +=1;
}
if(d < 10 && d>0){
    one +=1;
}
if(e < 10 && e>0){
    one +=1;
}
if(a < 100 && a>10){
    two +=1;
}
if(b < 100 && b>10){
    two +=1;
}
if(c < 100 && c>10){
    two +=1;
}
if(d < 100 && d>10){
    two +=1;
}
if(e < 100 && e>10){
    two +=1;
}
if(a < 1000 && a>100){
    three +=1;
}
if(b < 1000 && b>100){
    three +=1;
}
if(c < 1000 && c>100){
    three +=1;
}
if(d < 1000 && d>100){
    three +=1;
}
if(e < 1000 && e>100){
    three +=1;
}
console.log(one, "Однозначных", two, "Двухзначных и", three, "Трёхзначных чисел");

/*
let rand = (Math.random())*60;
if(rand > 0 && rand < 15) {
    console.log("First")
} else if (rand > 15 && rand < 30) {
    console.log("Second")
} else if (rand > 30 && rand < 45) {
    console.log("Third")
} else {
    console.log("Fourth")
};
*/
/*
let num = +prompt("write a number from 1 - 4");
if(num == 1){
    console.log("Spring")
} else if(num == 2) {
    console.log("Summer")
} else if(num == 3) {
    console.log("Autumn")
} else if(num == 4) {
    console.log("Winter")
} else {
    console.log("Nothing")
}
*/