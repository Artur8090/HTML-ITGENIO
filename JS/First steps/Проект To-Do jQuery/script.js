$(function(){
    let $tasksList = $('#tasksList');
    let $taskInput = $('#taskInput');
    let $notification = $('#notification')

function displayNotification(){
    if(!$tasksList.children().length){
        $notification.fadeIn('fast')
    } else{
        $notification.css('display','none')
    }
}
$('#taskAdd').on('click',function(){
    if(!$taskInput.val()){return false;}
    $tasksList.append('<li>' +$taskInput.val() + '<button class= "delete">&#10006</button></li>')
    $taskInput.val('')
    displayNotification();
})

$('.delete').on('click',function(){
    let $parent = $(this).parent()

    $parent.css('animation','fadeOut .3 linear')

    setTimeout(function(){
        $parent.remove();
        displayNotification();

    }, 295)
})
})