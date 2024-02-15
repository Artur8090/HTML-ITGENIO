alert(`Write down numbers, and guess what
number sequence the machine has created`);

let numbers = [0,1,2,3,4,5,6,7,8,9];
let secret_number = "";
for(let i = 0; i < 4; i++){
    let index = Math.floor(Math.random() * numbers.length);
    secret_number += numbers[index]
    numbers.splice(index,1);

}
let guess = prompt("Write a four digit number");
if(+guess == secret_number){
    alert("You Won!");
}
console.log(secret_number)