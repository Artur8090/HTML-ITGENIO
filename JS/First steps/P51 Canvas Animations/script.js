window.onload = function(){
    canvas = document.getElementById('drawingCanvas');
    ctx = canvas.getContext('2d')
    canvas.onmousedown = canvasClick;
    setTimeout('drawFrame()',20)
}

function Ball(x, y, dx, dy, radius){
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.strokeColor = 'black'
    this.fillColor = 'red'
}

let balls = [];

function addBall(){
    let radius = parseFloat(document.getElementById('ballSize').value);
    let ball = new Ball(50,50,1,1,radius)

    balls.push(ball)
}
function clearBalls(){
    balls = [];
}

function drawFrame(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.beginPath();

    for(let i = 0; i<balls.length; i++){
        let ball = balls[i];
        ball.x += ball.dx
        ball.y += ball.dy;

        if((ball.y) < canvas.height) ball.dy += 0.22

        ball.dx = ball.dx *0.998;
        if((ball.x + ball.radius > canvas.width) || (ball.x - ball.radius < 0)){
            ball.dx = -ball.dx
        }
        if((ball.y + ball.radius > canvas.height) || (ball.y - ball.radius < 0)){
            ball.dy = -ball.dy * 0.96;
        }
        if(!document.getElementById('connectedBalls').checked){
            ctx.beginPath();
            ctx.fillStyle = ball.fillColor;
        }
        else{
            ctx.fillStyle = 'white';
        }

        ctx.arc(ball.x, ball.y, ball.radius,0 , Math.PI*2);
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke()
    }
    setTimeout('drawFrame()',20)
}

function canvasClick(e){
    let clickX = e.pageX - canvas.offsetLeft;
    let clickY = e.pageY - canvas.offsetTop;

    for(let i in balls){
        let ball = balls[i];
        if((clickX > (ball.x-ball.radius)) && (clickX < (ball.x+ball.radius))){
            if((clickY > (ball.y-ball.radius)) && (clickY < (ball.y+ball.radius))){
            ball.dx -= 2;
            ball.dy -= 3;
            return;
            }
        }
    }
}