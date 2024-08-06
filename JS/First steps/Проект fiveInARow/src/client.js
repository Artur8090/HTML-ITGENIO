export async function askSize() {
    const sizeInput = document.getElementById('size');
    const button = document.getElementById('size-button');
    return new Promise((res) => (
        button.onclick = () =>{
        res(+sizeInput.value);
        button.onclick = null;

    }))

}



export function sayWin(){
    return console.log('Победа')
}

export default function Client(size){
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    const canvasWidth = 800;    
    const cellSize = canvas.width/size;
    function outField(field){
        ctx.clearRect(0,0,canvas.width,canvas.width);
        for(let i = 0; i < field.length; i++){
            for(let j = 0; j < field[i].length; j++){
                ctx.strokeRect(i * cellSize, j * cellSize, cellSize, cellSize);
                if(!field[i][j]) continue;
                ctx.fillStyle = colors[field[i][j]];
                ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize)
            }
        }
    }
    return {
        outField,
    };
}