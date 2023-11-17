/*
let a = 0
if (a < 0) {
    console.log("-")
}
else if (a > 0) {
    console.log("+")
}
else{
    console.log("0")
}

let quest = prompt("Как зовут главного робота из вашей школы?")
if(quest == "Itgenic") {
    console.log("Правильно!")
}
else {
    console.log("Неправильно!")
}
*/
/*
let age = prompt("What is your age?")
if (age >=18 && age <= 25){
    console.log(true)
} 
else {
    console.log(false)
}

let age1 = prompt("What is your age?")
if (age >=18 && age <= 25){
    console.log(false)
} 
else {
    console.log(true)
}
let age2 = prompt("What is your age?")
if (age2 != 18 && age2 < 18 && age2 != 25 && age2 > 25){
    console.log(true)
} 
else {
    console.log(false)
}
*/
let hour = prompt("What time is it?")
if(hour < 8 || hour > 23) {
    console.log("Closed")
}
else{
    console.log("Open")
}