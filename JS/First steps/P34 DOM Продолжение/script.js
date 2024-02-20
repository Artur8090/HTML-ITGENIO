let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');

button1.addEventListener('click',function(){
    alert("1")
})
button2.addEventListener('click',function(){
    alert("2")
})
button3.addEventListener('click',function(){
    alert("3")
})

function func1() {
	alert("1");
}

function func2() {
	alert("2");
}

button4.addEventListener('click',func1)
button5.addEventListener('click',func2)