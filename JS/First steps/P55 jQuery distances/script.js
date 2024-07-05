$(document).ready(function() {
    let elem = $('#container');
    elem.width(500).height(500)
    elem.css('margin',100);
    elem.css('padding',100)
    console.log(elem.height(), elem.width())
    console.log(elem.innerHeight(), elem.innerWidth())
    console.log(elem.outerHeight(), elem.outerWidth())


})
