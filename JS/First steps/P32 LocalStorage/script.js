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


let time = localStorage.getItem("time");

if(time != null){
    let now = Date.now();
    localStorage.setItem("time",now)
    let since = now - time;
    localStorage.setItem("since", since / 1000 + " Секунд")
}


let reloads = 0;
localStorage.setItem('Re-load', 0); 

let name = localStorage.getItem('Re-load');
if(name === null){
    reloads++;
    localStorage.setItem("Re-load",reloads);
    name = localStorage.getItem('Re-load');
    document.write(name);
}


let name = localStorage.setItem("name","Artur")

let age = localStorage.setItem("age","16")

let country = localStorage.setItem("Country","Norway")
let num = localStorage.length;
if(num > 10){
    document.write("Too much information");

}
for(let key in localStorage){
    let value = localStorage.getItem(key);
    console.log(value)
}


let obj = {
    "age": age = prompt("Write your age"),
    "name" : name = prompt(oldObj.name)
}
let newObj = JSON.stringify(obj);
localStorage.setItem(newObj)
let oldObj = JSON.parse(newObj);
oldObj.name = "Artur";
*/
let toDoList = `{}`
let newToDoList = "";
let action; 
let mark;
let move = prompt("What action do you want to do?");

if(move == "add item"){
toDoList = JSON.parse(toDoList);
    action = prompt("Add a new list item");
    mark = prompt("is it done or not?");
    toDoList.action = mark;
    localStorage.setItem(action, toDoList.action)
} else if(move == "change"){

    action = prompt("Change what item");
    newMark = prompt("New value");
    toDoList.action = newMark
    localStorage.setItem(action,newMark)
}
for(key in localStorage.getItem(toDoList)){
    let value = localStorage.getItem(key);
    if(value == "done"){
        localStorage.removeItem(value);
        console.log(value);
    }
}



