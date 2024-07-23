
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
/*
    function stepOne() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let isSuccess = true;
                if (isSuccess) {
                    resolve({ data: "Серверные данные1" });
                } else {
                    reject("Ошибка при запросе данных");
                }
            }, 1000);
        });
    }
    
    function stepTwo() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let isSuccess = true;
                if (isSuccess) {
                    resolve({ data: "Серверные данные2" });
                } else {
                    reject("Ошибка при запросе данных");
                }
            }, 1000);
        });
    }
    function stepThree() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let isSuccess = true;
                if (isSuccess) {
                    resolve({ data: "Серверные данные2" });
                } else {
                    reject("Ошибка при запросе данных");
                }
            }, 1000);
        });
    }
    stepOne()
        .then(response => {
            console.log(response);
            return stepTwo();
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });
       function stepOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isSuccess = true;
            if (isSuccess) {
                resolve({ data: "Серверные данные1" });
            } else {
                reject("Ошибка при запросе данных");
            }
        }, 1000);
    });
}

function stepTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isSuccess = true;
            if (isSuccess) {
                resolve({ data: "Серверные данные2" });
            } else {
                reject("Ошибка при запросе данных");
            }
        }, 1000);
    });
}

function stepThree() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isSuccess = true;
            if (isSuccess) {
                resolve({ data: "Серверные данные3" });
            } else {
                reject("Ошибка при запросе данных");
            }
        }, 1000);
    });
}

function delayStep(stepFunction, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            stepFunction().then(resolve).catch(reject);
        }, delay);
    });
}

Promise.all([
    delayStep(stepOne, 1000),
    delayStep(stepTwo, 2000),
    delayStep(stepThree, 3000)
]).then(responses => {
    responses.forEach(response => console.log(response));
}).catch(error => {
    console.error(error);
});

function slowTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isSuccess = true;
            if (isSuccess) {
                resolve({ data: "Серверные данные1" });
            } else {
                reject("Ошибка при запросе данных");
            }
        }, 3000);
    });
}

function fastTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isSuccess = true;
            if (isSuccess) {
                resolve({ data: "Серверные данные" });
            } else {
                reject("Ошибка при запросе данных");
            }
        }, 1000);
    });
}

Promise.race([slowTask(), fastTask()])
    .then(response => {
        console.log("Fastest task completed with:", response);
    })
    .catch(error => {
        console.error("Error in the fastest task:", error);
    });


    let city = prompt('What city do you want to know the weather in?');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=92d96b9a7a7dc4ffd5777ffe291ddc0f`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {

            console.log(`Weather in ${city}:`);
            console.log(`Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C`); // Convert Kelvin to Celsius
            console.log(`Weather: ${data.weather[0].description}`);
            console.log(`Humidity: ${data.main.humidity}%`);
            console.log(`Wind Speed: ${data.wind.speed} m/s`);
        })
        .catch(error => {

            console.error('Error fetching the weather data:', error);
        });
            */

        function checkIngredients() {
            return new Promise((resolve, reject) => {
                let isSuccess = true;
                setTimeout(() => {
                    if (isSuccess) {
                        resolve('ingredients found');
                    } else {
                        reject('ingredients not in stock');
                    }
                }, 1000);
            });
        }
        
        function prepareAndBakePizza() {
            return new Promise((resolve, reject) => {
                let isSuccess = true;
                setTimeout(() => {
                    if (isSuccess) {
                        resolve('pizza was baked');
                    } else {
                        reject('pizza not ready');
                    }
                }, 2000);
            });
        }
        
        function deliverPizza() {
            return new Promise((resolve, reject) => {
                let isSuccess = true;
                setTimeout(() => {
                    if (isSuccess) {
                        resolve('pizza was delivered');
                    } else {
                        reject('pizza was lost');
                    }
                }, 1500);
            });
        }
        
        function orderPizza() {
            console.log('checking ingredients...');
            checkIngredients()
                .then(response => {
                    console.log(response);
                    console.log('preparing the pizza...');
                    return prepareAndBakePizza();
                })
                .then(response => {
                    console.log(response);
                    console.log('delivering the pizza...');
                    return deliverPizza();
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.error(error);
                });
        }
        

        orderPizza();