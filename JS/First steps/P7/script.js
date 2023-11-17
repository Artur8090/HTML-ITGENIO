/*
let a = 1;
let b = a++ + --a - (a += 2) + (a *= 2);
console.log(b)
*/
/*
let a = prompt("Write a value for a")
let b = a % 10;
let c = a % 100;
alert(c, b)

let x = prompt("Write a value for x")
console.log(Math.abs(x))
*/
/*
let d = prompt("What is your grade in math?")
let e = prompt("What is your grade in science?")
let f = prompt("What is your grade in geography")
let g = prompt("What is your grade in history?")
console.log(Math.min(d,e,f,g), Math.max(d,e,f,g))
*/
/*
let num = 238;
num = Math.sqrt(num)
console.log(num, Math.ceil(num))

let rand = Math.random() * 100 - 30
console.log(rand)
*/
/*
let N = +prompt("People")
let M = +prompt("Candy")

    console.log("Каждему дадут по", Math.floor(M/N), " конфет", ". Но останьется ", M % N, " конфет")
*/
/*
let a = +prompt("Сколько рублей стоит пирожок?")
let b = +prompt("Сколько копеек стоит пирожок?")
let n = +prompt("Сколько пирожков?")
console.log((a+(b/100))*n)
*/
/*
let min = +prompt("How many minutes have passed since 0:00?","0")
let h = min/60
let m = min % 60
console.log("The time is",Math.floor(h),":",m) 
*/
let num = +prompt("Напиши число между 0 - 1000","0")
if(num < 10) {
    console.log("Однозначное число")
} 
else if (10 <= num && num < 100) {
    console.log("Двухзначное число")
} 
else if (100 <= num && num < 1000) {
    console.log("Трёхзначное число")
}
else {
    console.log("Число не подходит")
}
