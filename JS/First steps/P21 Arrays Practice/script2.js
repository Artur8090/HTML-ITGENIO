if(rand % 3 == 0) {
    arr.push("<font color = red>" + rand + "</font>");
} else if(i == 0){
    arr.push(rand);  
} else if(i % 3 == 0) {
    arr.push("<strong>" + rand + "</strong>");
} else if(rand ) {
    arr.push(rand)
}
if(rand > max){
    max = rand
};
let indexMax = arr.indexOf(max);
arr[indexMax] = "<font color = green>" + max + "</font>";