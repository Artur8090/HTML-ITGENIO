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
/*
ctx.fillStyle = 'blue';
ctx.fillRect(200, 50, 75, 25);
ctx.fillStyle = 'red';
ctx.fillRect(275, 50, 75, 25);

// Function to convert degrees to radians
function getRadians(degrees) {
    return Math.PI / 180 * degrees;
}

// Rectangle rotated 90 degrees
ctx.save();
ctx.translate(400, 75); // Adjusted to position the rotation center correctly
ctx.rotate(getRadians(90));
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 75, 25);
ctx.fillStyle = 'red';
ctx.fillRect(75, 0, 75, 25);
ctx.restore();

// Rectangle rotated 90 degrees and then 180 degrees (270 degrees in total)
ctx.save();
ctx.translate(600, 75); // Position the third rectangle to the right of the second one
ctx.rotate(getRadians(270)); // 90 degrees + 180 degrees = 270 degrees
ctx.fillStyle = 'blue';
ctx.fillRect(0, -75, 75, 25); // Corrected to ensure correct positioning
ctx.fillStyle = 'red';
ctx.fillRect(75, -75, 75, 25);
ctx.restore();
*/
ctx.fillStyle = 'blue';
ctx.fillRect(25,25,100,50)
ctx.translate(35,17)
ctx.stroke();
ctx.fillStyle = 'rgba(0,0,255,0.50)'
ctx.scale(1.25,1.25)
ctx.fillRect(25,25,100,50)
ctx.translate(35,17)
ctx.stroke();
ctx.fillStyle = 'rgba(0,0,255,0.25)'
ctx.scale(1.5,1.5)
ctx.fillRect(25,25,100,50)
ctx.stroke();