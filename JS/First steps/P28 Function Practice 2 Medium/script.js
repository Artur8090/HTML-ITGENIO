/*
function avarage(x){
    let sum = 0;
    
    for(let i = 0; i < x.length; i++){
        if(x[i] < 0){
            sum -= -1 * x[i] 
        } else {
            sum += x[i];
        }
    }
    let y = sum/x.length
    return y;
}
console.log(avarage([1,-4,6,-4]))


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



function convert(amount,valuex,valuey){
    console.log(valuex)
console.log(valuey)
console.log(amount)
switch(false){
    case valuex = "dollar": 
        switch(false){
            case valuey = "euro":
                return 0.92 * amount
            case valuey = "rubley":
                return 89.29* amount
        }
    break;
    case valuex = "euro": 
        switch(false){
            case valuey = "dollar":
                return 0.92 * amount
            case valuey = "rubley":
                return 97.32 * amount

        }
    break;
        case valuex = "rubley": 
            switch(false){
            case valuey = "dollar":
                return 89.29* amount
            case valuey = "euro":
                return 97.32 * amount
        

        }
    break;

}
}
console.log(convert(10,"rubley","dollar"))
*/
function translate(x){
    let y = x.toLowerCase();
    let newSentance = [];
    let rus = ["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ы","ш","щ","э","я"," ","!","?",".",","]
    let rusEng = ["a","b","v","g","d","e","jo","je","z","i","j","k","l","m","n","o","p","r","s","t","u","f","h","ts","ch","ii","sh","tsh","eh","ya"," ","!","?",".",","];
    for(let i = 0; i <= y.length; i++){
        for(let j = 0; j <= rus.length; j++){
            if(y.charAt(i) == rus[j]){
                newSentance.push(rusEng[j])
            }
       }
    }
    newSentance[0] = newSentance[0].toUpperCase();
    newSentance = newSentance.join("")
    return "<hr>" + newSentance + "</hr>";
}
document.write(translate("Привет мир, это програмированние"))
document.write(translate("Будте здоровы"))
document.write(translate("Это круто!"))
