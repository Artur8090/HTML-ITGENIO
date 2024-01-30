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
*/
let num_arr = [25,81,121,4096];
let result = num_arr.map(function(item){
    return item**0.5
})
console.log(result)

let arr_num 
