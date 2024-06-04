let canvas;
let ctx;

window.onload = function(){
    canvas = document.getElementById('drawingCanvas');
    ctx = canvas.getContext('2d')

    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;

}

let previousColorElement;
function changeColor(color, imgElement){
    ctx.strokeStyle = color;
    imgElement.className = 'Selected';
    if(previousColorElement != null){
        previousColorElement.className = '';
    }
    previousColorElement = imgElement
}
let previousThicknessElement;
function changeThickness(thickness, imgElement){
    ctx.lineWidth = thickness;
    imgElement.className = 'Selected';
    if(previousThicknessElement != null){
        previousThicknessElement.className = '';
    }
    previousThicknessElement = imgElement
}

function startDrawing(e){
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop)
}

function draw(e){
    if(isDrawing == true){
        let x = e.pageX - canvas.offsetLeft;
        let y = e.pageY - canvas.offsetTop;

        ctx.lineTo(x,y);
        ctx.stroke();
    }
}
function stopDrawing(){
    isDrawing = false;
}
function clearCanvas(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
}
function saveCanvas(){
    let imageCopy = document.getElementById('savedImageCopy');

    imageCopy.src= canvas.toDataURL();
    let imageContainer = document.getElementById('savedCopyContainer')
    imageContainer.style.display = 'block'
}