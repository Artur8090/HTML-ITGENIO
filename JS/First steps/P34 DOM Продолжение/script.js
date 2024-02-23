/*
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

function func() {
	console.log('message');
}

let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')
let elem3 = document.querySelector('#elem3')
let elem4 = document.querySelector('#elem4')
let elem5 = document.querySelector('#elem5')

elem1.addEventListener('click', func);
elem2.addEventListener('click', func);
elem3.addEventListener('click', func);
elem4.addEventListener('click', func);
elem5.addEventListener('click', func);

function func3() {
	console.log('1');
}

function func4() {
	console.log('2');
}

function func5() {
	console.log('3');
}

let elem = document.querySelector('#elem');
elem.addEventListener('click',func3)
elem.addEventListener('click',func4)
elem.addEventListener('click',func5)


function func(){
    console.log("shh");
}
function func1(){
    console.log("hovering");
}
function func2(){
    console.log("not hovering")
}
let button = document.querySelector('#button');
button.addEventListener('dblclick',func)
button.addEventListener('mouseover',func1)
button.addEventListener('mouseout',func2)


let elem = document.querySelector('#text');
function read(){
    console.log(elem.textContent)
}
function change(){
    elem.textContent = "bananas";
}
let button = document.querySelector('#textbutton');
let newButton = document.querySelector('#newtextbutton')
button.addEventListener('click',read)
newButton.addEventListener('click',change)

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let submit = document.querySelector('#summary');
num1 = num1.textContent;
num2 = num2.textContent;
function sum(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(num1 + num2);
}

submit.addEventListener('click',sum)

let summary = document.querySelector('#sum');
let div = document.querySelector('#answer');
let number1 = document.querySelector('#number1').textContent;
let number2 = document.querySelector('#number2').textContent;
let number3 = document.querySelector('#number3').textContent;
function sum(){
    number1 = parseInt(number1) 
    number2 = parseInt(number2)
    number3 = parseInt(number3)
    div.textContent = number1 + number2 + number3;
}
summary.addEventListener('click',sum)
console.log(div)


let num = document.querySelector('#num').textContent;
let numContent = document.querySelector('#num');
let button = document.querySelector('#add');
function add(){
    num = parseInt(num);
    num++;
    numContent.textContent = num;
}
button.addEventListener('click',add);
console.log(numContent)
*/

let val = document.querySelector('#newText').textContent;
let valContent = document.querySelector('#newText');
let button = document.querySelector('#exclamation');
function change(){
    val =  val.split("")
    val.push("!");
    val = val.join("")
    valContent.textContent = val;
}
button.addEventListener('click',change)