let arr = ['Сегодня тебя ждет удача','Сегодня тебе следует смотреть под ноги','Сегодня не интересный день','Сегодня будет весело']
let start = document.querySelector('#start');
let timer = document.querySelector('#timer');
let wrap = document.querySelector('.wrapper')

function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min+1)) + min
}

start.addEventListener('click',function(){
    start.classList.remove('active');
    let button = document.createElement('button');
    button.classList.add('active');
    button.innerText = 'Получить предсказание'
    wrap.
})