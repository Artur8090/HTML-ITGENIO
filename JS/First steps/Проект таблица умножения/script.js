let number;
do{
    number = prompt("Write a number")
} while(isNaN(number));
for(let i = 0; i <= 10; i++){
    document.write(`<h2>${number} * ${i} = ${number * i}</h2>`);
}
document.querySelector(".number").innerText = number;