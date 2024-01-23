/*
function mult(m,n){
    return m * n;
}
alert(mult(2,3))


function func(age){
    if(age > 12){
        return "Доступ разрешён"
    } else {
        return "Доступ запрешён!"
    }
}
alert(func(12))
// 


function add([a, b, c, d]){
    return a**2 + b**2 + c**2 + d**2
}
console.log(add([1,2,3,4]))


function getDigitsSum(a){
    let sum = 0;
    let arr = a.split("");
    for(let i = 0; i != 5; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(getDigitsSum(300));


function reverseStr(a){
let arr = a.split("");
arr = arr.reverse();
arr = arr.join("");
return arr;
}
console.log(reverseStr("Hello!"))


function fillArray(a,b){
let arr = [];
for(let i = a; i < b; i++){
    arr.push(i);
}
return arr;
}
console.log(fillArray(1,10))
*/

function checkArray(a){
    let arr = a
    for(let i = 0; i != arr.length; i++){
        if(arr[i] < 0){
            return false;
        }
    }
    return true;
}
console.log(checkArray([0,5,200,9]))