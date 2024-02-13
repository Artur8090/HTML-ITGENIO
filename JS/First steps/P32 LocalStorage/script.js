/*
let sum = 0;
let data1 = localStorage.getItem("key1");
let data2 = localStorage.getItem("key2");
let data3 = localStorage.getItem("key3");
let numbers = [0,1,2,3,4,5,6,7,8,9];
let str = ["0","1","2","3","4","5","6","7","8","9"]
for(let i = 0; i < 100; i++){
    if(str[i] == data1 || str[i] == data2 || str[i] == data3){
        sum+= numbers[i]
    }
}

console.log(sum) 
*/

let time = localStorage.getItem("time");

if(time != null){
    let now = Date.now();
    localStorage.setItem("time",now)
    let since = now - time;
    localStorage.setItem("since", since / 1000 + " Секунд")
}
