$(document).ready(function() {
    let elem = $('h2');
    /*
    elem.wrap("<div class='test'></div>")
    
    elem.wrapInner('<i></i>')
   
    $('h2').wrapAll('<i></i>')
    $('p').unwrap()
    
    $('h2').prepend('<p>!</p>').append('<p>?</p>')
    
    $('h2').prepend('!').append('?').css('color','red')
   

    elem.replaceWith(elem.text())
    elem.replaceWith('p')
     

    elem.remove();
    elem.empty();
    */
    console.log($('.www').attr('href'));

    let link = $('a');
    let firstLink = link.eq(0);
    console.log(firstLink.attr('href'));
    console.log(firstLink.attr());
    
    for(let i = 0; i < link.length; i++){
        console.log(link.eq(i).attr('href')); 
    }
    
    for(let i = 0; i < link.length; i++){ 
        link.eq(i).attr('href', '1');
        link.eq(i).attr('target', '_blank');
        link.eq(i).attr('value', link.eq(i).attr('href'));
        link.eq(i).after(`<p> ( ${link.eq(i).attr('href')} ) </p>`); 
    }
    
    $('li').addClass('test');
    $('li').removeClass('www');
    $('li').toggleClass('www');
    $('li').prop('class', 'www');
})