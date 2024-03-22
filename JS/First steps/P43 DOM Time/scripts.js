/*
let button = document.querySelector('#button');

button.addEventListener('click',function(){
    let i = 0;
    setInterval(function()
    {   i++
        if(i % 3 == 0){
            console.log("Прошло много времени")
        } else {
            console.log(i);
        }
        
    },1000)

})


const num = 5;
let sub = 0;
        
button.addEventListener('click', function(){
    setInterval(function()
    {   
        if(sub < 5){
        sub++;
        console.log(num-sub)
        }
    },1000)
})


let sub = 0;
        
let i = 0;
button.addEventListener('click', function(){
    setInterval(function()
    {   
        
        if(sub == i){
            sub = 0;
            i++
            console.log(i)
        }
        sub++;


    },1000)
})
*/
let button = document.querySelector('#button');

let num = document.querySelector('#number');

button.addEventListener('click',function(){

    setInterval(function()
    {  
        if(num.value > 0){
        num.value--;
        }

    },1000)

})