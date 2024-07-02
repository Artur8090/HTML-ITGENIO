$(document).ready(function() {
    let find = $('li').not('.test');
    let first = $('li').first();
    let last = $('li').last();
    let numFive = $('li').eq(5);
    let nextToLast = $('li').eq($('li').length - 2);
    let threeToTen = $('li').slice(2, 10); 
    let filtered = $('li').filter('.www');
    let prev = $('.test').prev();
    let next = $('.test').next();
    let allPrev = $('.test').prevAll();
    let allNext = $('.test').nextAll();
    let prevUntil = $('.www').prevUntil('.text');
    let nextUntil = $('.text').nextUntil('.www');

    function logElements(elements) {
        elements.each(function(element) {
            console.log($(element).text());
        });
    }

    console.log('find:');
    logElements(find);
    console.log('first:', first.text());
    console.log('last:', last.text());
    console.log('numFive:', numFive.text());
    console.log('nextToLast:', nextToLast.text());
    console.log('threeToTen:');
    logElements(threeToTen);
    console.log('filtered:');
    logElements(filtered);
    console.log('prev:', prev.text());
    console.log('next:', next.text());
    console.log('allPrev:');
    logElements(allPrev);
    console.log('allNext:');
    logElements(allNext);
    console.log('prevUntil:');
    logElements(prevUntil);
    console.log('nextUntil:');
    logElements(nextUntil);
});