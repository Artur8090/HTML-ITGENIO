/*
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let submit = document.querySelector('#summary');
num1 = num1.innerHTML;
num2 = num2.innerHTML;
function sum(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(num1 + num2);
}

submit.addEventListener('click',sum)


let p1 = document.querySelector("#pa1").innerHTML;
let p2 = document.querySelector("#pa2").innerHTML;
let button1 = document.querySelector("#p1")
let button2 = document.querySelector("#p2")
function par1(){
    alert(p1);
}
function par2(){
    alert(p2)
}
button1.addEventListener('click', par1)
button2.addEventListener('click', par2)

let para = document.querySelector('#noName');
let hello = document.querySelector('#hello');
let goodbye = document.querySelector('#goodbye');

hello.addEventListener('click',function(){
    para.innerHTML = "hello";
})

goodbye.addEventListener('click',function(){
    para.innerHTML = "goodbye";
})

let p1 = document.querySelector('#one')
let p2 = document.querySelector('#two')
let p3 = document.querySelector('#three')

p1.addEventListener('click',function(){
    p1.innerHTML+=1;
})
p2.addEventListener('click',function(){
    p2.innerHTML+=2;
})
p3.addEventListener('click',function(){
    p3.innerHTML+=3;
})


let num = document.querySelector('#number');
let button = document.querySelector('#square');

button.addEventListener('click',function(){
    newNum = parseInt(num.innerHTML);
    num.innerHTML = newNum**2;
})


let num = document.querySelector('#num').innerHTML;
let numContent = document.querySelector('#num');
let button = document.querySelector('#add');
function add(){
    num = parseInt(num);
    num++;
    numContent.innerHTML = num;
}
button.addEventListener('click',add);
console.log(numContent)

let val = document.querySelector('#newText').innerHTML;
let valContent = document.querySelector('#newText');
let button = document.querySelector('#exclamation');
function change(){
    val =  val.split("").reverse("");
    val.push("!");
    val = val.reverse("")
    val = val.join("")
    valContent.innerHTML = val;
}
button.addEventListener('click',change)


let p = document.querySelector('#hell');
let button = document.querySelector('#italic');

button.addEventListener('click',function(){
    p.innerHTML = "<i>Hello!</i>";
})
*/

let text = document.querySelector('#noName');
let button = document.querySelector('#bold');

button.addEventListener('click',function(){
    text.innerHTML = "<b>" + text.innerHTML + "</b>";
})