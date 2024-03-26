let answerForm = document.querySelector('.answer-form')
let input = document.querySelector('input')
let text = document.querySelector('.text')
let start = document.querySelector('.start')
let restart = document.querySelector('.restart')
let ok = document.querySelector('.ok')

let number = 0;
let attempts = 3;
start.addEventListener('click',function(){
    number = Math.floor(Math.random()*10)
    start.style.display = 'none';
    restart.style.display = 'block';
    answerForm.style.display = 'flex';
    text.innerHTML = 'Введи число между 1 и 10'
})

ok.addEventListener('click',function(){
    let answer = input.value;
    if(attempts > 0){ 
    if(answer < number){
        attempts--;
        text.innerHTML = 'Мое число больше' + '<br>' + 'Осталось ' + attempts + ' Попыток';
    } else if(answer > number){
        attempts--;
        text.innerHTML = 'Мое число меньше' + '<br>' + 'Осталось ' + attempts + ' Попыток'
    } else if(answer == number){
        answerForm.style.display = 'none';
        text.innerHTML = 'Ты угадал число!'
    }
} else{
    answerForm.style.display = 'none';
    text.innerHTML = 'Ты проиграл'
}
})

restart.addEventListener('click',function(){
    number = Math.floor(Math.random()*10)
    answerForm.style.display = 'flex';
    text.innerHTML = 'Введи число между 1 и 10'
    input.value = "";
    attempts = 3;
})