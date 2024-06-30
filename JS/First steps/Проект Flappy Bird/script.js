let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d')

let bird = new Image();
bird.src = 'imgs/bird.png';

let bg = new Image();
bg.src = 'imgs/bg.png';

let fg = new Image();
fg.src = 'imgs/fg.png';

let pipeBottom = new Image();
pipeBottom.src = 'imgs/pipeBottom.png';

let pipeTop = new Image();
pipeTop.src = 'imgs/pipeTop.png'

let fly = new Audio();
fly.src = 'Audio/fly.mp3';

let hit = new Audio();
hit.src = 'Audio/hit.wav';

let scoreSound = new Audio();
scoreSound.src = 'Audio/score.mp3'




let gap = 100;
let birdX = 10;
let birdY = 150;
let gravity = 0.6;
let score = 0;

let pullingForce1 = 1;
let pullingForce2 = 0.1;
function draw(){
    ctx.drawImage(bg,0,0);
    ctx.drawImage(fg,0,canvas.height - fg.height);
    ctx.drawImage(bird, birdX, birdY);
    for(let i = 0; i < pipe.length; i++){
        ctx.drawImage(pipeTop, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeTop.height + gap)
        pipe[i].x--;
        if(pipe[i].x == 125){
            pipe.push({
                x: canvas.width, 
                y: Math.random()*pipeTop.height - pipeTop.height
            })
        }
        if(birdX + bird.width >= pipe[i].x 
            && birdX  <= pipe[i].x + pipeTop.width
            && (birdY <= pipe[i].y + pipeTop.height || birdY + bird.height >= pipeTop.height + gap)
            || birdY + bird.height >= canvas.height-fg.height){
            location.reload();
        }
        if(pipe[i].x + pipeTop.width == birdX-1){
            score++;
            scoreSound.play()
            pipe.shift()
        }
    }
    pullingForce1 += pullingForce2;
    birdY+=pullingForce1;
    
    ctx.font = '16px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('Score:' + score, 20, 40)
    requestAnimationFrame(draw)
}

let pipe = [];
pipe[0] = {
    x: canvas.width,
    y: 0,

}



document.addEventListener('keydown', function(){
    birdY -= 40;
    pullingForce1 = 1;
    fly.play()
})
draw()