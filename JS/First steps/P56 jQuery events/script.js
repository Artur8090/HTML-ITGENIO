/*
$('p').click(function(){
    $(this).hide();
})

$('p').dblclick(function(){
    $(this).hide();
})
    
   $('p').hover(function(){
    $(this).hide()
   })
*/

$('p').click(function(){
    alert($(this).text())
})
$('a').hover(function(){
    $(this).text() =  + $(this).attr("href");
})