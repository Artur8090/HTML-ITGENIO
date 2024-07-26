export function drawRect(x,y,width,height, color){
    const canvas = document.querySelector('#drawCanvas')
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(x,y,width,height,color);

}