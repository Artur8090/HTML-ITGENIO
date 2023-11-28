/*
let a = prompt("Write a number");
let b = a.length;
console.log(b);
*/
/*
let a = prompt("Write a sentance");
let b = a.length;
if(b > 10){
    console.log(a.toUpperCase());
} else{
    console.log(a.toLowerCase());
}
*/
/*
let a = prompt("Впиши слово с буквами А и Б");
let A = a.indexOf("a");
let B = a.indexOf("b");
if(A < B){
    console.log("Буква А раншье");
} else if (B < A){
    console.log("Буква Б раньше");
} else{
    console.log("Ты не вписал слово с буквами А или Б");
}
*/
/*
let a = prompt("Write a text longer than 50 symbols");
let b = a.indexOf("a");
let c = a.indexOf("o");
if(a.indexOf("_") == b + 1 && a.indexOf("!") == c + 1){
    console.log("Все хорошо!");
} else if (a.length < 50){
    console.log("Ты написал слишком короткий текст");
} else{
    console.log("Nepravilno");
}
*/
/*
let a = prompt("Как твои дела?");

if(a.indexOf("хорошо") > -1){
    console.log("это хорошо!");
} else if (a.indexOf("плохо") > -1){
    console.log("Просто улыбнись и всё будет в порядке!");
} else{
    console.log("Хорошего вечера!")
}
*/
/*
let a = prompt("write a word");
let starThree = "* * *";
let starOne = "*";
let txt;
if(a.length % 2 == 0){
    a = starThree.concat(a,starThree)
    console.log(a);
}
else if(a.length % 2 != 0){
    console.log(starOne.concat(a,starOne));
} 
else{
    console.log("This is not a word");
}
*/
/*
let a = prompt("Write a sentance");
let b = a.length;
if(b % 2 == 0){
    a = a.replace(a.charAt(0),a.charAt(b-1));
    a = a.replace(a.charAt(b-1),a.charAt(0));
    console.log(a);
} else if(b%2 != 0){
    a = a.replace(a.charAt(1),a.charAt(b-2));
    a = a.replace(a.charAt(b-2),a.charAt(1));
    console.log(a);
}
*/
let a = prompt("Write a email adress");
if(a == "js@itgen.io"){
    console.log("Это правильная почта!")
} else if  (a.indexOf("@") > -1) {
    console.log("Это почта, но не айтигеника")
} else{
    console.log("Это не почта!")
}