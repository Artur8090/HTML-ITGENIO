let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
/*
ctx.fillStyle = 'blue'
ctx.fillRect(50,50,50,50)
ctx.translate(125,0)
ctx.fillStyle = 'red'
ctx.fillRect(50,50,50,50)
ctx.translate(125,0)
ctx.fillStyle = 'blue'
ctx.fillRect(50,50,50,50)
ctx.translate(0,125)
ctx.fillStyle = 'red'
ctx.fillRect(50,50,50,50)
ctx.translate(0,125)
ctx.fillStyle = 'blue'
ctx.fillRect(50,50,50,50)
ctx.translate(-125,0);
ctx.fillStyle = 'red'
ctx.fillRect(50,50,50,50)
ctx.translate(-125,0)

ctx.fillStyle = 'blue'
ctx.fillRect(50,50,50,50)

ctx.translate(0,-125)
ctx.fillStyle = 'red'
ctx.fillRect(50,50,50,50)
ctx.translate(125,0)
ctx.fillStyle = 'blue';
ctx.fillRect(50,50,50,50)
*/

ctx.fillStyle = 'blue';
ctx.fillRect(200,50,75,25)
ctx.fillStyle = 'red'
ctx.fillRect(275,50,75,25)

ctx.rotate(getRadians(50))
ctx.translate(50,0);
ctx.fillStyle = 'blue';
ctx.fillRect(200,50,75,25)
ctx.fillStyle = 'red'
ctx.fillRect(275,50,75,25)




ctx.stroke()

function getRadians(degrees){
    return Math.PI/180*degrees
}