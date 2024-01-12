/*
let toy = {
    name: "lego",
    color: "multi",
    age: 5,
};
toy.name = "PC";
delete toy.name;
console.log(toy)

let week = {
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
    7: "sunday"
}
console.log(week[5]);
let day = Math.round(Math.random()*7);
console.log(week[day])

let person = {
    "name": {
        "ru": "Шамякин Иван Петрович",
    }, 
    "bio": [
        {
        "year": "1921",
        "description": "Родился в кристиянской семье",
        "place": "д.Корма Гомельского уезда",
        },
        {
        "year": "1936",
        "description": "Начало учебы",
        "place": "Гомель",
        }
    ],
    "biblio": [
        {
            "year":"1949",
            "work":"Глубокое течение"
        },
        {
            "year":"1964",
            "work":"Сердце на ладони",
        }
    ]
};
console.log(person.name);
console.log(person.bio[0].year)
console.log(person.bio[1].place)
console.log(person.biblio[1]);
let person = {
    name: "Петя",
    age: 13
}
let count = 0;
for(key in person){
    console.log(`Ключ ${key}, значение ${person[key]}`)
    count++;
}
console.log(count)
*/
let people = {
    "Маша": 10,
    "Даша": 11,
    "Саша": 12,
    "Евгений": 1
}
let value = 0;
for(let i = 0; i != 4; i++){
    for(key in people){
        if(people[key] > value){
            value = people[key]
        }
    }
}
if(value == 0){
    console.log("Обект пустой")
} else {
    console.log(value)
}
