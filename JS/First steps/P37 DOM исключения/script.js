/*
let submit = document.querySelector('#input');
let button = document.querySelector('#input2')
let button2 = document.querySelector('#input2')
let div = document.querySelector('#elem');
let div2 = document.querySelector('#elem2');
submit.addEventListener('click',function(){
    alert(div.className)
}
)
button.addEventListener('click',function(){
    div.className = "newName"
})

button2.addEventListener('click',function(){
    let arr = [];
    arr.push(div2.className);
    arr = arr.join("").split(" ")
    alert(arr);
    console.log(arr)

})
*/
let img = document.querySelector('#image');
console.log(img.src, img.width, img.height)