/*
for(let i = +prompt("Напиши число"); i>=1; i-- ){
    console.log(i);
}

for(let i = 0; i < 60; i+=10){
    console.log(i);
};

let a = prompt("Напиши число");
let b = prompt("Напиши число")
if(a > b){
    for(let i = a; i != b; i--){
        console.log(i);
    }
} else if(a < b){
    for(let i = b; i != a; i--){
        console.log(i);
    }
}

let sum = 0;
for(let i = 10; i >= 0; i--){
    sum += i;
}
console.log(sum);

let n = 1;
let sum = 0;
while (n <= 10){
        if(n % 2 != 0){
            sum += n;
        };
    n++;
};
console.log(sum);

let n = 0;
sum = 0;
do {
    n++;
    if(n % 2 == 0){
        sum += n**2;
    } 
} 
while(n <= 10);
console.log(sum);

let sum = 0;
for(let i = 0; i <= 100; i++){
    if(i % 7 == 0){
        sum += i;
    }
}
console.log(sum);

let sum = 0;
let a = +prompt("Введи число");
for(let i = +prompt("Введи число"); i != a; i++){
    sum += i;
};
console.log(sum);
*/
for(let i = 5; i >= 1; i--){
    for(let j = 0; j <= 9; j++)
    console.log(i);
};