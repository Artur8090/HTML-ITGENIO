

/*
for(let i = 0; i < 10; i++){
    console.log(i)
};

for(let i = 9; i > 0; i--){
    console.log(i)
};

for(let i = -1; i > -10; i--){
    console.log(i)
};

let num = +prompt("Write a number");
while(num >=  -1 * num){
    if(num != 5 && num != -5){
        console.log(num);
        num--;
    }

}

let gift = +prompt("How many gifts do you have?");
let giftLast = 0;
while(gift > giftLast){
    giftLast = gift;
    gift = +prompt("How many gifts do you have?");
};
console.log("В прошлом году было больше!");

let word = prompt("Write a sentance");
let x = word.length;
while(x != 0){
    if(word.charAt(x-1) == word.charAt(x-1).toUpperCase()){
        word = word.replace(word.charAt(x-1),"")
    }
    x--;
}
console.log(word);

let rows = 20;
for (let i = 0; i < rows; i++) {
    var output = '';
    for (let k = 0; k <= i; k++) output += 'x ';
    console.log(output);  
}

let x = 0;
let rows = 20;
for (let i = 0; i < rows; i++) {
    var output = ''
    for (let k = 0; k <= i; k++) 
    output += x;
    x++;
    console.log(output);  
}

let N = prompt("How many layers does the pyramide have?");
let count = 1;
for (let i = 1; i < N; i++) {
    if(count <= N){
    for (let j = 1; j <= i; j++){
    document.write(count + " ");
    count++;
    }
    }
    document.write("<br>")
}

for(let i = 1; i < 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(i + " x " + j + " = " + i * j)
    }
}


let N = +prompt("What is the length of the board?")
for(let i = 0; i < N; i++){
    let board = "";
    for(let j = 0; j < N; j++){
        if((i + j) % 2 == 0){
            board += "#";
        } else{
            board += "_";
        }

    }
    console.log(board)
}
*/
let j = 23;
let answr = "";
while(j > 0){
    if(j % 2 == 0){
        answr += "0";
        j /= 2;
    } else if (j / 2 < 1) {
        answr += "0"
        j = 0;
    } else if(j % 2 != 0){
        answr += "1"
        j /= 2;
    }
    
}
console.log(answr)