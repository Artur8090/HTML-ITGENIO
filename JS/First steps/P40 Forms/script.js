/*
let text = document.querySelector('#text');
let p = document.querySelector('#p')

text.addEventListener('blur',function(){
    p.innerHTML = text.value;
})


let button1 = document.querySelector('#butn1')
let button2 = document.querySelector('#butn2')
let input1 = document.querySelector('#inp')

button1.addEventListener('click',function(){
    input1.disabled = true;
})
button2.addEventListener('click',function(){
    input1.disabled = false;
})


let check = document.querySelector('#check');
let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn2');

button1.addEventListener('click',function(){
    check.checked = true;
})

button2.addEventListener('click',function(){
    check.checked = false;
})
let check = document.querySelector('#check');
let text = document.querySelector('#text');
let button = document.querySelector('#button');
button.addEventListener('click',function(){
    if(check.checked == true){
        text.innerHTML = 'hi'
    } else if(check.checked == false){
        text.innerHTML = 'bye'
    }
})
*/



let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');

inp1.addEventListener('input', function() {
    if (inp1.value.length > 1) {
        inp1.blur();
        inp2.focus();
    }
});

inp2.addEventListener('input', function() {
    if (inp2.value.length > 1) {
        inp2.blur();
    }
});
