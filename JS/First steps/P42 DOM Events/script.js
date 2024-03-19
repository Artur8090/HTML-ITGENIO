/*
let elem = document.getElementById('elem');
elem.addEventListener('mousemove', func);

function func(event) {
	this.innerHTML = 'X:' + event.clientX + "<br>"+'Y: '+ event.clientY;
}

let elem = document.querySelector('#elem');
elem.addEventListener('click', func);

function func(event) {
    if(event.target.tagName == "LI") {
        event.target.innerHTML += "!";
    } else if(event.target.tagName == "UL") {
        let newText = document.createElement('li');
        newText.textContent = "text";
        elem.append(newText);
    }
}


let input = document.querySelector('#input');
let div = document.querySelector('#div');


function func(event){
    let code = event.keyCode;
    let key = String.fromCharCode(code);
    div.textContent += key;
    if(event.key == 'Enter'){
    div.textContent += event.keyCode
    
    }
}

input.addEventListener('keypress', func)
*/

let input = document.querySelector('#input');
let p = document.querySelector('#p');

input.addEventListener('keypress',func)
function func(event){
     
    let code = event.keyCode;
    let key = String.fromCharCode(code);
    let text = '';
    text += event.key;
    if(event.code == 'Enter'){
        p.textContent = text;
    }
}