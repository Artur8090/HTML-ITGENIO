/*
let num = +prompt("Write a number from 1 to 4");
switch(true){
    case num == 1:
        alert("Зима");
    break;
    case num == 2:
        alert("Весна");
    break;
    case num == 3:
        alert("Лето");
    break;
    case num == 4:
        alert("Осень");
    break;
    default:
     alert("Not a number from 1 - 4");
};
*/
/*
let num = +prompt("Write a number above 0");
switch(true){
    case num > 0 && num < 10:
        alert("Однозначное число");
    break;
    case num >= 10 && num < 100:
        alert("Двухзначное число");
    break;
    case num >= 100 && num < 1000:
        alert("Трёхзначное число");
    break;
    case num >= 1000:
        alert("Большое число");
    break;
    default:
        alert("Маленькое число");
};
*/
let month = Math.round(Math.random()*12);
switch(true){
    case month == 12 || month == 1 || month == 2:
        alert("Зима " + month);
    break;
    case month >= 3 && month <=5:
        alert("Весна " + month);
    break;
    case month >= 6 && month <=8:
        alert("Лето " + month);
    default:
        alert("Осень " + month);
}
