let a;
let str = prompt("Напиши слово");
let opp = prompt("Напиши операцию");
let b = str.length;
let mx;
let mn;
let c;

switch(true){
    case opp == 1: 
    console.log(b);
    break;
    case opp == 2:
        mx = prompt("Напиши начало строки");
        mn = prompt("Напиши конец строки");
        console.log(str.slice(mx, mn));
    break;
    case opp == 3:
    str = str.split("");  
    a =str[0];  
    str[0] = str[str.length -1];  
    str[str.length -1] = a;  
    console.log(str.join(""));  
    break;
    case opp == 4:
        c = prompt("Напиши новое слово");
        str = str.replace(str,c);
        console.log(str)
    break;
    case opp == 5:
        str = str.toLowerCase();
        console.log(str);
    break;
    default:
        console.log("Это не операция");
    break;
}
console.log("Hello".concat("world"))
console.log("Hello World".slice(0,6));