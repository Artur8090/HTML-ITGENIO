/*
let button = document.querySelector('#submit');
let input = document.querySelector('#input');
button.addEventListener('click',function(){
    alert(input.value);
})

let button2 = document.querySelector('#submit2');
button2.addEventListener('click',function(){
    input.value = "Hi"
})

let p = document.querySelector('#empty');
let button3 = document.querySelector('#submit3');

button3.addEventListener('click',function(){
    p.innerHTML = input.value;
})


let button = document.querySelector('#button');
let button2 = document.querySelector('#button2');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

button.addEventListener('click',function() {
    let num = parseInt(input1.value)
    input2.value = num ** 2
})

button2.addEventListener('click',function(){
    let info = input1.value;
    input1.value = input2.value;
    input2.value = info
})
*/

let input = document.querySelector('#input');
input.addEventListener('focus',function(){
    input.value = "1"
})
input.addEventListener('blur',function(){
    input.value = "2"
})

let input2 = document.querySelector('#square');
input2.addEventListener('blur',function(){
    input2.value = input2.value ** 2
})

let input3 = document.querySelector('#text');
input3.addEventListener('focus',function(){
    input3.value = "";
}
)