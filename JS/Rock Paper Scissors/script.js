let choice = +prompt("Rock Paper Scissors!","1 = Rock, Paper = 2, Scissors = 3");
let bot = Math.round((Math.random()*2.5)+1);
let botChoice = 0;
if(bot == 1){
    botChoice = 1;
} else if(bot == 2){
    botChoice = 2;
} else if(bot == 3){
    botChoice = 3;
}
if(choice == botChoice) {
    console.log("Draw")
} else if(choice == 1 && botChoice == 2) {
    console.log("Lost")
} else if(choice == 1 && botChoice == 3) {
    console.log("Won")
} else if(choice == 2 && botChoice == 1) {
    console.log("Won")
} else if(choice == 3 && botChoice == 1) {
    console.log("Lost")
}
console.log(botChoice)
console.log(bot)
console.log(choice)
