/*
let date = new Date();

let min = date.getMinutes()
let hour = date.getHours()
let second = date.getSeconds()
if(min < 10){
    min = "0"+ min
}
if(second < 10){
    second = "0"+ second
}
if(hour < 10){
    hour = "0"+ hour
}
console.log(`${date.getFullYear()}/${date.getMonth() +1}/${date.getDate()}`)
console.log(`${hour}:${min}/${second}`)

let day = date.getDay();
console.log(day)
if(day == 6 || day == 0){
    console.log("Сейчас выходной!")
} else{
    console.log("Школа, работа")
}
console.log(`${7 - day} дней до воскресения`)
let month = date.getMonth();
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(months[month]);

let birthdate = new Date(2007, 8, 28);
let day = birthdate.getDay();
console.log(`${day} - Пятьница`);

let oldDate = new Date(1988, 2, 1);
let newerDate = new Date(2000, 0, 10);
let diff =  newerDate.getTime() - oldDate.getTime();
console.log(diff/(1000*60*60*24))

let oldDate = new Date(2007, 8, 28);
let newerDate = new Date();
let diff =  newerDate.getTime() - oldDate.getTime();
console.log(diff/(1000*60*60*24*30))

let now  = new Date(2010, 1,15);
let date = new Date(2000, 8, 1); 

let diff = now - date;
console.log(diff); 
console.log(diff/(1000*60*60*24)); 
console.log(diff/(1000*60*60*24*30)); 
console.log(diff/(1000*60*60*24*365)); 

let date = new Date(2025,5,0);
let day = date.getDay();
console.log(day);

let date = new Date(2021,2,0);

let days = date.getDate();
if(days == 29){
    console.log("Высокосный")
} else{
    console.log("Обычный")
}

let startDate = new Date(2024,1,9);
let date = new Date();
let diff = date - startDate;
console.log(diff/(1000))

let startDate = new Date();
let date = new Date(2024,1,10);
let diff = date - startDate;
console.log(diff/(1000))

let currentDate = new Date();
let birthDate = new Date(2024,8,28);
let diff = birthDate - currentDate;
console.log(diff/(1000*60*60*24));

let currentDate = new Date();
let newYear = new Date(2025,0,1);
let diff = newYear - currentDate;
console.log(diff/(1000*60*60*24));

let date = new Date()
let month = date.getMonth();
let day = date.getDate();
let year = date.getFullYear();
let OldDate = new Date(year,month-3,day);
console.log(OldDate)

let date = new Date(2024,2,-1);
let Day = date.getDay();
console.log(Day)

let date = new Date();
let year = date.getFullYear();
let newDate = new Date(year,2,0);
let days = newDate.getDate();
if(days == 29){
    console.log("Высокосный")
} else{
    console.log("Обычный")
}


let date = new Date();
let year = date.getFullYear();
function vis(){
    for(let i = year - 1; i != 0; i--){
        let newDate = new Date(i,2,0);
        let days = newDate.getDate();
        if(days == 29){
            return i + " Высокосный год"
        } 
    }

}
console.log(vis());


let date = new Date();
let year = date.getFullYear();
function vis(){
    for(let i = year + 1; i < 10000; i++){
        let newDate = new Date(i,2,0);
        let days = newDate.getDate();
        if(days == 29){
            return i + " Высокосный год"
        } 
    }

}
console.log(vis());
*/
