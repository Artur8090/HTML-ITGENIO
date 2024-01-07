let kg = +prompt("Write the amount of kilograms you want to convert");
let lb = kg * 2.20462;
alert(`There are ${lb} pounds in ${kg} kilograms`);

let number1 = +prompt("Write a number");
let number2 = +prompt("Write another number");
let opperation = prompt("Write the opperation");
let answer = 0;
if(opperation == "+"){
    answer = number1 + number2;
} else if(opperation == "-"){
    answer = number1 - number2;
} else if(opperation == "*"){
    answer = number1 * number2;
} else if(opperation == "/"){
    answer = number1 / number2;
} else{
    answer = 0;
}
alert(answer);