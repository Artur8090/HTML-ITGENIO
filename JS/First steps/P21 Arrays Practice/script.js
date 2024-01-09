let arrLength = +prompt("What is the length of the array?");
let arr = [];
let rand = 0;
let max = 0;
for(let i = 0; i != arrLength; i++){
    rand = Math.round((Math.random() * 200) - 100);
    arr.push(rand);
    if(rand > max){
        max = rand
    };
}
for(let i = 0; i != arrLength; i++){
    if(arr[i] < 10 && arr[i] > -10){
        arr[i] = "<i>" + arr[i] + "</i>"
    }
}
for(let i = 0; i != arrLength; i++){
    if(arr[i] < 0){
        arr[i] = "<ins>" + arr[i] + "</ins>";
    }
}
for(let i = 0; i != arrLength; i++){
    if(arr[i] == max){
        arr[i] = "<font color = green>" + arr[i] + "</font>";
    }
}
for(let i = 0; i != arrLength; i++){
    if(i % 3 == 0){
        arr[i] = "<strong>" + arr[i] + "</strong>"
    }
}
for(let i = 0; i != arrLength; i++){
    if(arr[i] % 3 == 0){
        arr[i] = "<font color = red>" + arr[i] + "</font>";
    }
}



document.write(arr);
