/*
function hello(day){
    document.write(`Здравствуйте! Сегодня ${day}. Хорошего дня!`)
}
console.log(hello("Tuesday"))

function val(x){
    if(x < 0){
        return false
    }
    return true
}
console.log(val(3))

console.log(val(-3))


function pal(x){
    let y = x.split();
    y.reverse();
    y = y.join();
    if(x == y){
        return true
    }
    return false
}

console.log(pal("scocs"))
console.log(pal("notPalindrome"))

function line(x){
    let arr = [];
    let y = -1 * x;
    if(x > 0){
        for(let i = x; i >= y; i--){
            arr.push(i);
        }
    } else if(x < 0){
        for(let i = x; i <= y ;i++){
            arr.push(i)
        }
    }
    return arr;
}

console.log(line(10))
console.log(line(-10))

function geo(a,b,x){
    if(x == "circle"){
        return 3.14 * a * b;
    } else if(x == "rectangle"){
        return a * b;
    } else if(x == "triangle"){
        return (a*b)/2
    }
}
console.log(geo(2,2,"circle"))
console.log(geo(2,2,"rectangle"))
console.log(geo(2,2,"triangle"))

function calc(a,b,x){
    if(x == "+"){
        return a + b;
    } else if(x == "-"){
        return a - b;
    } else if(x == "*"){
        return a* b;
    } else if(x == "/"){
        return a/b;
    }
}
console.log(calc(4,4,"+"))
console.log(calc(4,4,"-"))
console.log(calc(4,4,"*"))
console.log(calc(4,4,"/"))
*/

function val(x,y){
    let greater = 0;
    x > y ? greater = x : greater = y;
    return greater;
}

console.log(val(10,20))
console.log(val(10,-20))

function find(x){
    let num = 0;
    let str = 0;
    let y = 0;
    let string = "0123456789";
    let z = x.length;
    for(let i = 0; i != 11; i++){
        y = string.charAt(i);
        for(let j = 0; j != z; j++){
            if(x.charAt(j) == y){
                num++;
            }
        }
        str = z - num;
    }
    return `${str} strings and ${num} numbers`
}
console.log(find("Daydreamer20002"))
console.log(find("Daydreamer"))
console.log(find("Day2dr3e23a5me4r"))

function noDecim(x){
    let arr = [];
    if(x > 10 && x < 100 ){
        for(let i = 0; i <= x; i++){
            if(x % i == 0){
                arr.push(i);
            }
        }
        return arr;
    } 
    return "Only 2 digit numbers"

}
console.log(noDecim(200))
console.log(noDecim(20))
console.log(noDecim(12))
console.log(noDecim(99))