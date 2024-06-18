let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d')
let x = canvas.width/2;
let y = canvas.height-30
let dx = 2;
let dy = -2;
let ballRadius = 10;
let rightPressed = false;
let leftPressed = false;
let score = 0;
let brickRowCount = 5;
let brickCollumnCount = 3;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
let lives = 3;


document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('keydown', keyDownHandler, false)
document.addEventListener('mousemove', mouseMoveHandler, false)
function drawBall(){

    ctx.beginPath()
    ctx.arc(x,y,ballRadius,0,Math.PI*2,false)
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath()

}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawBricks()
    drawBall()
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius){
        dx = -dx;
    }
    if(y + dy < ballRadius){
        dy = -dy;
    } else if( y + dy > canvas.height-ballRadius){
        if(x > paddleX && x < paddleX + paddleWidth){
            dy = -dy
        } else{
            lives--;
            if(lives == 0){
                alert('GAME OVER');
                document.location.reload();
            } else{
                x = canvas.width/2;
                y = canvas.height-30
                dx = 2;
                dy = -2;
                paddleX = (canvas.width-paddleWidth)/2
            }
        }
    
    }
    x+=dx;
    y+=dy;
    if(rightPressed && paddleX < canvas.width - paddleWidth){
        paddleX +=7;
    } else if(leftPressed && paddleX > 0){
        paddleX -= 7;
    }
    drawPaddle()
    drawScore()
    collisionDetection()
    drawLives()
    
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
function mouseMoveHandler(e){
    let relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width){
        paddleX = relativeX - paddleWidth/2
    }
}
let bricks = []
for(let c = 0; c < brickCollumnCount; c++){
    bricks[c] = [];
    for(let r = 0; r < brickRowCount; r++){
        bricks[c][r] = {x : 0, y : 0, status : 1};
    }
}
function drawBricks(){
    
    for(let c = 0; c < brickCollumnCount; c++){
        for(let r = 0; r < brickRowCount; r++){
            if(bricks[c][r].status == 1){
                let brickX = (r*(brickWidth+brickPadding)) + brickOffsetLeft;
                let brickY = (c*(brickHeight+brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX,brickY,brickWidth, brickHeight);
                ctx.fillStyle = '#0095DD'
                ctx.fill()
                ctx.closePath()
            }
        }
    }
}
function collisionDetection(){
    for(let c = 0; c < brickCollumnCount; c++){
        for(let r = 0; r < brickRowCount; r++){
            let b = bricks[c][r]
            if(b.status == 1){
                if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
                    dy = -dy
                    b.status = 0;
                    score++;
                    if(score == brickRowCount * brickCollumnCount){
                        alert('Ты выйграл. Поздравляю!')
                        document.location.reload()
                    }
                }
        }
        }
    }
}
function drawScore(){
    ctx.font = '16px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('Счёт:' + score, 8, 20)
}
function drawLives(){
    ctx.font = '16px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('Жизни:' + lives, canvas.width - 100, 20)
}
let interval = setInterval(draw, 10)

