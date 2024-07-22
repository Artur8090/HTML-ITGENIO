
/*
function loadImage(img){
    
    return new Promise((resolve, reject) => {
            setTimeout(() => {
        if(img){
            resolve(`Изображение загружено: ${img}`)
        } else{
            reject('Ошибка: URL изображения пусто')
        }
    },1000)
    }

)}

loadImage("https://example.com/image.jpg")
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

loadImage("")
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
 
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            let isSuccess = true
            if(isSuccess){
                resolve({ data: "Серверные данные"})
            } else{
                reject("Ошибка при запросе данных")
            }
        }
        ,1500)
    }
)}

fetchData()
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
       */

function stepOne(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
        let isSuccess = true
        if(isSuccess){
            resolve({ data: "Серверные данные1"})
        } else{
            reject("Ошибка при запросе данных")
        }
        }, 1000)
    }
)}
function stepTwo(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
        let isSuccess = true
        if(isSuccess){
            resolve({ data: "Серверные данные2"})
        } else{
            reject("Ошибка при запросе данных")
        }
        }, 1000)
    }
)
}
stepOne().then((response) => console.log(response))
    stepTwo().then((response) => console.log(response))