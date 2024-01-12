/*
let fruit = ["apple", "banana", "pineapple", "pear", "orange", "grapes", "watermellon"];
let newFruit = [];
let fruitIndx = "";
for(let j = 5; j != 20; j++){
    for(let i = 0; i != 7; i++){
        fruitIndx = fruit[i];  
         if(fruitIndx.length == j){
            newFruit.push(fruit[i]);
        }
    }
}
fruit = newFruit;
console.log(fruit);
*/

let fruit = ["apple", "banana", "watermellon", "grape", "orange"];
let berries = ["blueberry", "strawberry", "blackberry", "raspberry", "cranberry"];
let mix = fruit.concat(berries);
mix.sort();
console.log(mix)

