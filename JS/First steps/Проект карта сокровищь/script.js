const map = document.querySelector('#map')
const distanceDom = document.querySelector('#distance')
let clickLeft = document.querySelector('#clicks');
let randNum = function(size){
    return Math.floor(Math.random()*size)
};
let width = 800;
let height = 800;
let clicks = 0;
let target = {x: randNum(width), y: randNum(height)}

map.addEventListener('click',function(event){
    clicks++;
    if(clicks <= 10) {
    let getDistance = function(event, target){
        let diffX = event.offsetX - target.x;
        let diffY = event.offsetY - target.y;
        return Math.sqrt((diffX**2)+(diffY**2))
    }
    let getDistanceHint = function(distance){
        if(distance < 10){
            return 'Обожжешься'
        } else if(distance < 20) {
            return 'Очень-Очень горячо'
        } else if(distance < 40) {
            return 'Очень Горячо'
        }else if(distance < 80) {
            return 'Горячо'
        } else if(distance < 120) {
            return 'Тепло'
        } else if(distance < 160) {
            return 'Холодно'
        } else if(distance < 320) {
            return 'Очень холодно'  
        } else if(distance < 560) {
            return 'Очень-Очень холодно'  
        }else {
            return 'Замерзнешь!'  
        }
    }
    let distance = getDistance(event,target);

    let distanceHint = getDistanceHint(distance);

    distanceDom.innerHTML = distanceHint;

    if(distance < 8){
        alert('Клад найден! Зделано кликов:' + clicks )
    }
    console.log(clicks)
    clickLeft.innerHTML--;
} else {
    alert('Конец игры, ты проиграл')
}
})
