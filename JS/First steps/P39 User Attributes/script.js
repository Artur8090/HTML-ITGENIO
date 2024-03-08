/*
console.log(
    document.querySelector('#newId').dataset.number
)

let val = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click',func)

function func(){
val.innerHTML = val.dataset.value
}

let blocks = document.querySelectorAll('.block');
console.log(blocks)
for(let i = 0; i < blocks.length; i++){
    blocks[i].setAttribute('name','hello')
}*/

let button = document.querySelector('#button');
let blockOne = document.querySelector('#one');
let blockTwo = document.querySelector('#two')

function func(){
    const firstData = blockOne.dataset.name;
    blockOne.dataset.name = blockTwo.dataset.name;
    blockTwo.dataset.name = firstData;    
}
button.addEventListener('click',func)