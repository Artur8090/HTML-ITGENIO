/*
let name = () => document.write("Artur");
name();

let cube = x => alert(x**3);
cube(5);

let sum = (x,y,z) => alert(x+y+z);
sum(1,2,3)

let pos = x => {
    if(x > 0){
        console.log("positive")
    } else if( x < 0){
        console.log("negative")
    } else{
        console.log("0")
    }
};
pos(-10)
pos(20)
pos(0)

let rev = x => { 
   x = x.split("")
   x = x.reverse();
   x = x.join("");
   console.log(x)
}
rev("Itgenio")
*/
let arr = [2,4,6];
let arrCheck = arr.every(elem => elem % 2 == 0)
console.log(arrCheck)

let arr2 = [1,2,3,4];
let arr2Check = arr2.some(elem => elem == 0);
console.log(arr2Check)

let arr3 = [1,2,3,4,5,6];
let arrSum = 1;
let arr3Check = arr3.forEach(elem => arrSum *= elem)
console.log(arrSum)

let arr4 = [1,10,100,1000,10000];
let arr4Check = arr4.filter(elem => elem >= 100);
console.log(arr4Check)

let arr5 = ["Apple","Watermellon","Pineapple","Orange","Banana","Grape","Pear"];
let arr5Check = arr5.filter(elem => elem.length >= 7);
console.log(arr5Check)