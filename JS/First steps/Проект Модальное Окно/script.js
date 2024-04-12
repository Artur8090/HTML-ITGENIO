let btn = document.getElementById('btn')
let modal = document.getElementById('modal')
btn.addEventListener('click',function(){
    modal.classList.add('show')
    
    setTimeout(function(){
    dialog.style.transform ='rotateX(0)'
    },200)
})
let dialog = document.getElementsByClassName('modal_dialog')[0]