let arr1 = [1, 2, 3];
arr1.push(4, 5, 6);

let arr2 = [1, 2, 3];
arr2.unshift(4, 5, 6);

console.log(arr1,arr2)

let arr3 = ["js", "css", "jq"];
arr3.shift();

let arr4 = ["js", "css", "jq"];
arr4.pop();
console.log(arr3,arr4);

let arr5 = [1, 2, 3 ,4 ,5];
newArr5 = arr5.slice(0, 3);

let arr6 = [1, 2, 3 ,4 ,5];
newArr6 = arr6.slice(3, arr6.length);

console.log(newArr5, newArr6)

let arr7 = [1, 2, 3, 4, 5]
arr7.splice(1, 2)
alert(arr7)

let arr8 = [1, 2, 3, 4, 5]
arr8.splice(0, 1)
arr8.splice(3,4)
alert(arr8)

let arr9 = [1, 2, 3, 4, 5]
arr9.splice(0, 2, [3], ["a"], ["b"], ["c"])
alert(arr9)

let arr10 = [1, 2, 3, 4, 5]
arr10.splice(1, 1, ["a"], ["b"])
arr10.splice(4, 4,["c"])
alert(arr10)
