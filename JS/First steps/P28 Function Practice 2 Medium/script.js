
function avarage(x){
    let sum = 0;
    
    for(let i = 0; i <= x.length; i++){
        sum += x[i];
    }
    let y = sum/x.length
    return y;
}
document.write(avarage([1,-2,3,-4]))


function sort(x){
    let big = 0;
    let arr = [];
    for(let j = 0; j != x.length; j++){    
        for(let i = 0; i != x.length; i++){
            if(x[i] > big){
                big = x[i];
            }
        }
        arr.push(big)
        x.splice(x.indexOf(big))
    }
    return arr;
}
console.log(sort([1,5,3,7,0,9]))
/*

function power(x){
    let y = 1;
    let pow = 0;
    while(x > 1){
        if(x/y > 1){
            pow++;
            x /= 10;
        }
    }
    return pow;
}
console.log(power(20000))

console.log(power(2034230))

console.log(power(2000))

function rever(x){
    x = x.split(" ");
    x = x.reverse();
    x = x.join(" ")
    return x;
}
console.log(rever("Hi MY NAME IS ARTUR"))


function mult(x){
    let multi = 1;
    for(let i = 0; i <= x.length; i++){
        if(i % 2 == 0){
            multi *= x[i];
            x[i] = "<ins>" + x[i] + "</ins>";

        }
    }
    document.write("<hr>" + x)
    document.write("<br>" + multi);
}
console.log(mult([10,20,30,40,50]))
console.log(mult([10,20,30,40,50,30,20,40,503]))
console.log(mult([10,20,30,40,-50]))
*/