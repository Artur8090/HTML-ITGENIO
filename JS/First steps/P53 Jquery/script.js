$(document).ready(function(){
    let elems = $('h3')
    for(let i  = 0; i <= elems.length - 1; i++){
        elems[i].innerText = '!!!'
    }
    elems.css('color','green')
    elems.css('font-weight','bold')

    let element = $('.zzz');
    element.css('color','red')

    $(':header').css('color', 'red')
})