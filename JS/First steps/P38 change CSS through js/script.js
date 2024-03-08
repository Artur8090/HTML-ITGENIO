const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

let body = document.querySelector('body');
let button = document.querySelector('#button');
let hex = document.querySelector('.hex')

function func() {
    let newBack = '#';
    for (let i = 0; i < 6; i++) {
        randNum = Math.floor((Math.random() * (colors.length - 1)))
        newBack += colors[randNum]
    }
    body.style.backgroundColor = newBack
    hex.innerHTML = newBack
}
button.addEventListener('click', func)