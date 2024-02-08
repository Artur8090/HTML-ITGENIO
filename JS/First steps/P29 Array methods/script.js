/*
let arr = [0,-5,23,-4];

let result = arr.some(function(elem){
    return elem > 0;
});
console.log(result)

let arr2 = [1,2,3,4,5]
let result2 = arr2.every(function(elem){
    return elem > 0;
})

let arr3 = [1,2,3,4,5]
let result3 = arr2.every(function(elem){
    return elem > 8;
})

let arr4 = ["abc","def","ghi"];

let result4 = arr4.map(function(letters){
    letters = letters.reverse();
    return letters
})
console.log(result4)

let num_arr = [25,81,121,4096];
let result = num_arr.map(function(item){
    return item**0.5
})
console.log(result)


let arr = [1,2,3,4,5];
arr.forEach(function(elem){
    console.log(elem + "!")
})
let arr2 = [1,2,3,4,5];
let sum = 0;
arr2.forEach(function(elem){
    sum += elem**2
})
console.log(sum);


let arr = [-5,-4,-3,-2,-1,0,1,2,3,4,5]
let arrFilterPos = arr.filter(function(num){
    return num > 0;
})
console.log(arrFilterPos)

let strArr = ["hi","how","are","you","doing","today","watermellon"]
let strFilterLen = strArr.filter(function(str){
    return str.length > 5;
})

console.log(strFilterLen)

let randArr = [1,2,[3,4],5,[6,7],"banana"];
let arrFilter = randArr.filter(function(notArray){

        if(typeof notArray == "number" || typeof notArray == "string"){
            return notArray
}
})
console.log(arrFilter)

*/
let randArrNum = [1,22,3,43,5,56,7,8,9,100000];
let arrFilterLess = randArrNum.filter(function(elem,index){
    return elem * index < 30
})
console.log(arrFilterLess)
