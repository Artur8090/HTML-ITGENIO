export function askSize() {
    let size = 0;
    while(size > 100 || size < 5){
        size = +prompt('Введите число которое больше 5ти и менше 100');
    }
    return size;
}

export function outField(field) {
    let str = "";
    for(const row of field){
        str += row.reduce((prev, el) => `${prev} ${el !== undefined ? el : '-'}`, '') + '\n';
    }
    console.log(str);
}

export function askPoint(size, isFilled){
    let x, y;
    do {
        x = +prompt('Введите х кординат')
        y = +prompt('Введите у кординат')
    } while(!isCoordInBetween(x) || !isCoordInBetween(y) || isFilled(x,y)){
        return{x,y};

    }
            
    function isCoordInBetween(coordinate){
        return coordinate >= 0 && coordinate < size;
    }

}

export function sayWin(){
    return console.log('Победа')
}