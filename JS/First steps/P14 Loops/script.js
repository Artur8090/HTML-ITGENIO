/*
let counter = 1;
while (counter < 11) {
  console.log(counter);
  counter++;
};

let counter = 1;
while (counter <= 10){
    if(counter % 2 == 0){
        console.log(counter);
    };
    counter++;
};

let a;
do {
    a = +prompt("Введите число выше 10");
    console.log("Я СКАЗАЛ ЧИСЛО ВЫШЕ 10")
} while(a <= 10){
    a = +prompt("Ещё раз, Введите число выше 10");
}

let a = 1;
while (a <= 8){
    console.log(a**2);
    a++;
}

let quest = prompt("Как у тебя дела?");
while(quest != "спасибо"){
    quest = prompt("Как у тебя дела?");
}; 
console.log("Всегда рада помочь");
*/
let a = 1;
while(a <= 20){
    a++;
    if(a % 5 == 0){
        continue;
    };
    console.log(a);

}

