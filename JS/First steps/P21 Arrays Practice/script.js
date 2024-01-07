let arrLength = +prompt("What is the length of the array?");
let arr = [];
let rand = 0;
for(let i = 0; i != arrLength; i++){
    rand = Math.round((Math.random() * 200) - 100);
        arr.push(rand);
}
for(let i = arr.length; i >= 0; i--){
    if(i % 3 == 0){
        arr.splice(arr[i-1], arr[i], arr.push(rand) + "<strong>");
    }
}
document.write(arr);