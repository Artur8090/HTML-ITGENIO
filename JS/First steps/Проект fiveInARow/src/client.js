export async function askSize() {
    const sizeInput = document.getElementById('size');
    const button = document.getElementById('size-button');
    return new Promise((res) => (
        button.onclick = () => {
            res(+sizeInput.value);
            button.onclick = null;
        }
    ));
}

export function sayWin() {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.font = "30px Arial"
    ctx.fillText('Победа',200,100)
}

export default function Client(size) {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    const canvasWidth = 800;
    const cellSize = canvasWidth / size;
    const colors = {
        X: 'red',
        O: 'blue'
    };

    function outField(field) {
        ctx.clearRect(0, 0, canvas.width, canvas.width);
        for (let i = 0; i < field.length; i++) {
            for (let j = 0; j < field[i].length; j++) {
                ctx.strokeRect(i * cellSize, j * cellSize, cellSize, cellSize);
                if (!field[i][j]) continue;
                ctx.fillStyle = colors[field[i][j]];
                ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
            }
        }
    }

    async function askPoint(isFilled) {
        return new Promise((res) => {
            canvas.onclick = (event) => {
                const rect = canvas.getBoundingClientRect();
                const x = Math.floor((event.clientX - rect.left) / cellSize);
                const y = Math.floor((event.clientY - rect.top) / cellSize);

                if (!isCoordInBetween(x) || !isCoordInBetween(y) || isFilled(x, y)) {
                    return;
                }

                canvas.onclick = null; // Remove event listener after capturing the click
                res({ x, y });
            };

            function isCoordInBetween(coordinate) {
                return coordinate >= 0 && coordinate < size;
            }
        });
    }

    return {
        outField,
        askPoint // Make sure to include askPoint in the return object
    };
}
