const imgs = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
let curNum = 0;

function right_arrow() {
    console.log(curNum);
    let obj = document.getElementById('img');
    if (curNum < imgs.length - 1) {
        curNum++;
    } else {
        curNum = 0;
    }
    obj.src = imgs[curNum]; // Update image source
}

function left_arrow() {
    console.log(curNum);
    let obj = document.getElementById('img');
    if (curNum > 0) {
        curNum--;
    } else {
        curNum = imgs.length - 1;
    }
    obj.src = imgs[curNum]; // Update image source
}