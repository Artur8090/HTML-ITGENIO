let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let blockSize = 10;
let widthInBlocks = width/blockSize;
let heightInBlocks = height/blockSize;
let score = 0;

function drawBorder(){
    ctx.fillStyle = 'Gray';
    ctx.fillRect(0,0,width,blockSize);
    ctx.fillRect(0,height-blockSize,width,blockSize);
    ctx.fillRect(0,0,blockSize, height);
    ctx.fillRect(width-blockSize,0,blockSize,height)
}
function drawScore(){
    ctx.font = '20px Courier';
    ctx.fillStyle = 'black'
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('Счет :' + score, blockSize, blockSize)
}
function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function gameOver(){
    clearInterval(intervalId);
    ctx.font = '60px Courier';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Конец игры', width/2, height/2)
}

function Newscore(){
    score+= 1;
    clearCanvas();
    drawBorder()
    drawScore()
    setInterval('Newscore()',1000)

}
Newscore()