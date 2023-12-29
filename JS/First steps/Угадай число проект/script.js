let N = +prompt(`В суть игры?
Игрок должен отгадать число в диапазоне
0 - N(Где N это максимальное число), 
за менше всего попыток.
Впиши снизу максимальное число.`);

let attempt = 1;

let answer = 0;

let ran = Math.floor(Math.random() * N);

while(true){
    answer = +prompt(`Введи число между 1 и ${N}:`);
    if(attempt < 6){

        if(answer < ran){

            alert("Число больше")
            attempt++;
        } else if(answer > ran){
    
            alert("Число менше")
            attempt++;
        } else if(answer == ran){
    
            alert(`Ты угадал за ${attempt} попыток!`)
            
    
            break;
    
        }
    } else{
        alert(`Ты проиграл`);
        break;
    }
}
let reload = prompt("Ты хочешь попробывать ещё раз?");
if(reload == "yes" || reload == "да"){
    document.location.reload()
} 
