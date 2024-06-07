window.onload = function() {
    canvas = document.getElementById('drawingCanvas');
    ctx = canvas.getContext('2d');

    canvas.onmousedown = canvasClick;
    canvas.onmouseup = stopDragging;
    canvas.onmouseout = stopDragging;
    canvas.onmousemove = dragCircle;
}

function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.isSelected = false;
}

let circles = [];
let isDragging = false;
let previousSelectedCircle = null;

function addRandomCircle() {
    let radius = randomFromTo(1, 60);
    let x = randomFromTo(0, canvas.width);
    let y = randomFromTo(0, canvas.height);

    let colors = ['green', 'orange', 'red', 'blue', 'yellow', 'pink', 'magenta', 'brown', 'purple'];
    let color = colors[randomFromTo(0, colors.length - 1)];
    let circle = new Circle(x, y, radius, color);
    circles.push(circle);

    drawCircles();
}

function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function drawCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];

        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.strokeStyle = 'black';

        if (circle.isSelected) {
            ctx.lineWidth = 5;
        } else {
            ctx.lineWidth = 1;
        }
        ctx.fill();
        ctx.stroke();
    }
}

function clearCanvas() {
    circles = [];
    drawCircles();
}

function canvasClick(e) {
    let clickX = e.pageX - canvas.offsetLeft;
    let clickY = e.pageY - canvas.offsetTop;

    for (let i = circles.length - 1; i >= 0; i--) {
        let circle = circles[i];

        let distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2));

        if (distanceFromCenter <= circle.radius) {
            if (previousSelectedCircle != null) {
                previousSelectedCircle.isSelected = false;
            }
            circle.isSelected = true;
            previousSelectedCircle = circle;
            isDragging = true;
            drawCircles();
            return;
        }
    }
}

function stopDragging() {
    isDragging = false;
}

function dragCircle(e) {
    if (isDragging && previousSelectedCircle != null) {
        let x = e.pageX - canvas.offsetLeft;
        let y = e.pageY - canvas.offsetTop;

        previousSelectedCircle.x = x;
        previousSelectedCircle.y = y;
        drawCircles();
    }
}