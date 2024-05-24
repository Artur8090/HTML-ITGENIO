let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d')


/*
ctx.beginPath()
ctx.moveTo(50,50)
ctx.lineTo(100,100)
ctx.lineTo(150,50)
//ctx.lineTo(50,50)
//ctx.closePath();
ctx.fill()
ctx.stroke()
*/
/*
ctx.fillRect(50,50,100,100)
ctx.clearRect(75,75,50,50)
*/
/*
function getRadians(degrees){
    return (Math.PI/180)*degrees
}

ctx.arc(100, 100, 75, 0, getRadians(180))
ctx.fillStyle = 'cyan';
ctx.fill()
*/

for(let i = 1; i <= 10; i++){
    ctx.lineTo(50, 15*i);
    ctx.moveTo(150, 15*i);
    ctx.stroke();
}