/*
let submit = document.querySelector('#input');
let button = document.querySelector('#input2')
let button2 = document.querySelector('#input2')
let div = document.querySelector('#elem');
let div2 = document.querySelector('#elem2');
submit.addEventListener('click',function(){
    alert(div.className)
}
)
button.addEventListener('click',function(){
    div.className = "newName"
})

button2.addEventListener('click',function(){
    let arr = [];
    arr.push(div2.className);
    arr = arr.join("").split(" ")
    alert(arr);
    console.log(arr)

})

let img = document.querySelector('#image');
console.log(img.src, img.width, img.height)




function func() {
    this.value = Number(this.value) + 1;
}

let elems = document.querySelectorAll('input');
console.log(elems)
for (let elem of elems) {
    elem.addEventListener('blur', func);
}

function func() {
    this.innerHTML = Number(this.innerHTML) ** 2;
    console.log(this.value)
}

let elems = document.querySelectorAll('p');
console.log(elems)
for (let elem of elems) {
    elem.addEventListener('click', func);
}

let divs = document.querySelectorAll('div');

for (let div of divs) {
	div.addEventListener('click', function(){
        this.textContent++;
    });
}


let link = document.querySelector('#link');
let button = document.querySelector('#button');
button.addEventListener('click',func)

function func(){
    link.innerHTML += link.href
    button.removeEventListener('click',func)
}

let buttonNum = 0;
let button = document.querySelector('#button');
button.addEventListener('click',func)

function func(){
if(buttonNum <= 8){
    button.value= Number(button.value) + 1;
    buttonNum++;
} else if(buttonNum > 10){
    button.removeEventListener('click',func)
}
}
*/
function func(){
    this.textContent= this.textContent+'!';
    this.removeEventListener('click',func)
}
let elems = document.querySelectorAll('p');
for(elem of elems){
    elem.addEventListener('click',func)
}