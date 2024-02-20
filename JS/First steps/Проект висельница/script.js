let words = ["носки","телефон","стена","стул","вода", "игра","еда"];
let word = words[Math.floor(Math.random()*words.length)];
let tries = 0;
let answer = []
let usedLetters = [];
for(let i = 0; i < word.length; i++){
    answer[i] = "_"
}
let remainingLetters = words.length;
while(remainingLetters > 0 && tries < 10){
    let guess = prompt("Угадай букву");
    guess = guess.toLowerCase();
    if(guess === null){
        break;
    } else if(guess.length !== 1){
        alert("Напиши одну букву");
    } else {
        for(let j = 0; j < word.length; j++){
            if(word[j] === guess){
                answer[j] = guess;
                remainingLetters--;

                
            }
        }
    }
    alert(answer.join(" "));
    tries++;
}
if(tries < 10){
    alert(`Правильно, слово было ${word} за ${tries} попыток`)
} else if(tries == 10){
    alert("you lost")
}
