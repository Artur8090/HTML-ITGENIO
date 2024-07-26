export function askSize(){
    let size = 0;
    while(size > 100 || size < 5){
        size = +prompt('Введите число которое больше 5ти и менше 100')
    }
    return size;
}