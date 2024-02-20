alert(`Write down numbers, and guess what
number sequence the machine has created`);

let numbers = [0,1,2,3,4,5,6,7,8,9];
let secret_number = "";
for(let i = 0; i < 4; i++){
    let index = Math.floor(Math.random() * numbers.length);
    secret_number += numbers[index]
    numbers.splice(index,1);

}
while(true){
let guess = prompt("Write a four digit number");
let number = [];
let flag = true;

    for(let i = 0; i < 4; i++){
        if(number.includes(guess[i]) || guess.length != 4){
            alert("write a different number");
            flag = false;
        } else{
            number.push(guess[i])
        }
    }
    if(!flag){
        continue;
    }
if(+guess == secret_number){
    alert("You Won!");
    break;
} else {
    let cows = 0;
    let bulls = 0;
    for(let i = 0; i < 4; i++){
        if(guess[i] == secret_number[i]){
            bulls++
        } else if (secret_number.includes(guess[i])){
            cows++;
        }
    }
    console.log(guess);
    console.log("Bulls: " + bulls + "Cows: " + cows);
}
}