let choice = +prompt("Rock Paper Scissors!","Rock = 1, Fire = 2, Scissors = 3, Sponge = 4, Paper = 5, Air = 6, Water = 7");
let bot = Math.round((Math.random()*6)+0.5);
let personName = 0;
let botName = 0;
if(choice == 1) {
    personName = "Rock"
} else if(choice == 2){
    personName = "Fire"
} else if(choice == 3){
    personName = "Scisser"
} else if(choice == 4){
    personName = "Sponge"
} else if(choice == 5){
    personName = "Paper"
} else if(choice == 6){
    personName = "Air"
} else if(choice == 7){
    personName = "Water"
};
if(bot = 1) {
    botName = "Rock"
} else if(bot == 2){
    botName = "Fire"
} else if(bot == 3){
    botName = "Scisser"
} else if(bot == 4){
    botName = "Sponge"
} else if(bot == 5){
    botName = "Paper"
} else if(bot == 6){
    botName = "Air"
} else if(bot == 7){
    botName = "Water"
};

if(personName == botName) {
    console.log("Draw")
} else if(personName == "Rock" && botName == "Fire" ||personName == "Rock" && botName == "Scissors" || personName == "Rock" && botName == "Sponge") {
    console.log("Won")
} else if(personName == "Fire" && botName == "Scissors" || personName == "Fire" && botName == "Sponge"||personName == "Fire" && botName == "Paper") {
    console.log("Won")
} else if(personName == "Scissors" && botName == "Sponge" || personName == "Scissors" && botName == "Paper" || personName == "Scissors" && botName == "Air") {
    console.log("Won")
} else if(personName == "Sponge" && botName == "Paper" || personName == "Sponge" && botName == "Air" || personName == "Sponge" && botName == "Water") {
    console.log("Won")
} else if(personName == "Paper" && botName == "Air" || personName == "Paper" && botName == "Water" || personName == "Paper" && botName == "Rock") {
    console.log("Won")
} else if(personName == "Air" && botName == "Water" || personName == "Air" && botName == "Rock" || personName == "Air" && botName == "Fire") {
    console.log("Won")
} else if(personName == "Water" && botName == "Rock" || personName == "Water" && botName == "Fire" || personName == "Water" && botName == "Scissors") {
    console.log("Won")
} 
  else if(personName == "Rock" && botName == "Paper" || personName == "Rock" && botName == "Air" || personName == "Rock" && botName == "Water") {
    console.log("Lost")
} else if(personName == "Fire" && botName == "Air" || personName == "Fire" && botName == "Water"||personName == "Fire" && botName == "Rock") {
    console.log("Lost")
} else if(personName == "Scissors" && botName == "Water" || personName == "Scissors" && botName == "Rock" || personName == "Scissors" && botName == "Fire") {
    console.log("Lost")
} else if(personName == "Sponge" && botName == "Rock" || personName == "Sponge" && botName == "Fire" || personName == "Sponge" && botName == "Scissors") {
    console.log("Lost")
} else if(personName == "Paper" && botName == "Sponge" || personName == "Paper" && botName == "Scissors" || personName == "Paper" && botName == "Fire") {
    console.log("Lost")
} else if(personName == "Air" && botName == "Scissors" || personName == "Air" && botName == "Sponge" || personName == "Air" && botName == "Paper") {
    console.log("Lost")
} else if(personName == "Water" && botName == "Air" || personName == "Water" && botName == "Paper" || personName == "Water" && botName == "Sponge") {
    console.log("Lost")
} 
console.log(botName)
console.log(personName)
