
function start() {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    let w, h, mouse, dots;

    function init() {
        w = canvas.width;
        h = canvas.height;
        mouse = { x: w / 2, y: h / 2, down: false };
        dots = [];
    }

    function loop() {
        ctx.clearRect(0, 0, w, h);
        if (mouse.down) {
            dots.push(new Dot(mouse));
             
        }
        updateDots();
        dots.map(dot => dot.draw()); 
        window.requestAnimationFrame(loop);

    }

    function setPos({ layerX, layerY }) {
        mouse.x = layerX;
        mouse.y = layerY;
    }

    function isDown() {
        mouse.down = !mouse.down;
    }

    init();
    canvas.addEventListener('mousemove', setPos);
    window.addEventListener('mousedown', isDown);
    window.addEventListener('mouseup', isDown);
    loop();
    
class Dot {
    constructor(mouse) {
        this.pos = { x: mouse.x, y: mouse.y };
        this.rad = random(config.dotMinRad, config.dotMaxRad);
        this.color = config.dotColor;
        this.mass = this.rad * config.massFactor;
        this.vel = {x:0, y:0}
    }

    draw() {
        createCircle(this.pos.x, this.pos.y, this.rad, true, this.color);
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y
    }
}

function updateDots(){
    for(let i = 0; i< dots.length; i++){
        let acc = {x: 0, y: 0};
        for(let j = 0; j < dots.length; j++){
            if(i == j) continue;
            let a = dots[i];
            let b = dots[j];
            let delta = {x: b.pos.x - a.pos.x, y: b.pos.y - a.pos.y};
            let dist = Math.sqrt(delta.x *  delta.x + delta.y * delta.y)
            let force = b - b.mass
            acc.x += delta.x * force
            acc.y += delta.y * force

        }
        dots[i].vel.x = dots[i].vel.x + acc.x
        dots[i].vel.y = dots[i].vel.y + acc.y
    }

}

const config = {
    dotMinRad: 6,
    dotMaxRad: 20,
    dotColor: 'rgba(250,10,30, 0.9)',
    massFactor: 0.002
};

const TWO_PI = 2 * Math.PI;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createCircle(x, y, rad, fill, color) {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, TWO_PI);
    ctx.closePath();
    fill ? ctx.fill() : ctx.stroke();
}

}

start();
