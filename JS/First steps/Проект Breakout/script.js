let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d')
let x = canvas.width/2;
let y = canvas.height-30
let dx = 2;
let dy = -2;
let ballRadius = 10;
let rightPressed = false;
let leftPressed = false;

document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('keydown', keyDownHandler, false)
function drawBall(){

    ctx.beginPath()
    ctx.arc(x,y,ballRadius,0,Math.PI*2,false)
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath()

}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawBall()
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius){
        dx = -dx;
    }
    if(y + dy < ballRadius || y + dy > canvas.height-ballRadius){
        dy = -dy;
    }
    x+=dx;
    y+=dy;
    if(rightPressed && paddleX < canvas.width - paddleWidth){
        paddleX +=7;
    } else if(leftPressed && paddleX > 0){
        paddleX -= 7;
    }
    drawPaddle()
}
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth)/2;
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight)
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath()
}

function keyDownHandler(e){
    if(e.keyCode == 39){
        rightPressed = true
    } else if(e.keyCode == 37){
        leftPressed = true
    }
}
function keyUpHandler(e){
    if(e.keyCode == 39){
        rightPressed = false
    } else if(e.keyCode == 37){
        leftPressed = false;
    }
}
setInterval(draw, 10)

