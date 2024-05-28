let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d')
/*
ctx.moveTo(20, 20);
ctx.lineTo(100, 20)

ctx.moveTo(20, 20);
ctx.lineTo(20, 100)

ctx.moveTo(40,40);
ctx.lineTo(20,20);
ctx.moveTo(40,20);
ctx.lineTo(20,40);

ctx.moveTo(50,50);
ctx.lineTo(25,25);
ctx.lineTo(0,50);
ctx.closePath()


ctx.moveTo(25,50);
ctx.lineTo(150,50)
ctx.lineTo(125,25)
ctx.moveTo(125,75)
ctx.lineTo(150,50)

ctx.moveTo(0,0);
ctx.lineTo(100,0)
ctx.lineTo(100,100);
ctx.lineTo(0,100)
ctx.closePath();
ctx.fill()

ctx.moveTo(250,250);
ctx.lineTo(350,250);
ctx.lineTo(300,175);
ctx.lineTo(250,250);
ctx.fill()

ctx.rect(50,50,100,75)
ctx.stroke();
ctx.fill();

ctx.fillRect(50,50,200,175)
ctx.clearRect(75,75,95,85)



ctx.arc(100, 100, 75, 0, getRadians(180))


ctx.moveTo(250,250)
ctx.strokeStyle = 'red';
ctx.lineTo(300,250);
ctx.stroke()
ctx.moveTo(250,260);
ctx.strokeStyle = 'green';
ctx.lineTo(300,260)

ctx.fillStyle = 'red'
ctx.fillRect(50,50,75,75);
*/

for(let i = 10; i < 100; i+=10){
    ctx.moveTo(100, 100+i)
    ctx.lineTo(200, 100+i)
}
for(let i = 10; i < 100; i+=10){
    ctx.moveTo(100+i, 100)
    ctx.lineTo(100+i, 200)
}

ctx.stroke()
function getRadians(degrees){
    return (Math.PI/180)*degrees
}