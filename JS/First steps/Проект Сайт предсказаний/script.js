let arr = ['Сегодня тебя ждет удача', 'Сегодня тебе следует смотреть под ноги', 'Сегодня не интересный день', 'Сегодня будет весело']
let start = document.querySelector('#start');
let timer = document.querySelector('#timer');
let wrap = document.querySelector('.wrapper')

let pict = ['Imgs/9e9.jpg','Imgs/cat_eating_looking_up.jpg','Imgs/sddefault.jpg','Imgs/images.jpg']
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

start.addEventListener('click', function () {
    start.classList.remove('active');
    let button = document.createElement('button');
    button.classList.add('active');
    button.innerText = 'Получить предсказание'
    wrap.append(button)

    let timerID = setInterval(function () {
        timer.innerHTML = random = getRandomInt(1, arr.length);
    }, 100)

    button.addEventListener('click', function () {
        clearInterval(timerID);
        let createImg = document.createElement('img')
        createImg.src = pict[random - 1 ]
        wrap.insertAdjacentHTML('afterbegin', `<p> ${arr[random - 1]} </p>`);
        wrap.append(createImg);
        setTimeout(() => button.remove(), 1000)
    })
});