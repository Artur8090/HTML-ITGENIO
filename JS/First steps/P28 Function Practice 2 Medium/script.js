function averege(x){
    let arr = x;
    let sum = 0;
    let y = arr.length
    for(let i = 0; i <= y; i++){
        sum += arr[i];
    }
    return sum/y;
}
console.log(averege([1,-2,3,-4]))    