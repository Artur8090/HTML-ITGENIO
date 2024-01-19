let sum = 0;
let count =0;
let hero = [
        {
            name: "Dallas",
            level: "25",
            power:  280      
        },
        {
            name: "Duke",
            level: "28",
            power: 240

        },
        {
            name: "Sokol",
            level: "15",
            power: 150
        },
        {
            name: "Wolf",
            level: "20",
            power: 180
        }
    ]

        for(let key in hero){
            document.write(hero[key].name + "<br>")
            document.write(hero[key].level + "<br>")
            document.write(hero[key].power + "<br>" + "<br>")
        }

let user = prompt(`Выберите действие
                    1) Вывести на экран героев чей уровень выше 20
                    2) Вывести на экран героев чья мощность выше 200 и уровень выше 22
                    3) Какой средний показатель мощности игры у героев
                    4) Провести соревнование между героями
                    `)

                    switch(user){
                        case "1":
                            for(key in hero){
                                if(hero[key].level > 20){
                                    console.log(`${hero[key].name} дошел до ${hero[key].level}`)
                                }
                            }
                            break; 
                        case "2":

                            for(key in hero){
                                if(hero[key].power > 200 || hero[key].level > 22){
                                    console.log(`${hero[key].name} дошел до ${hero[key].level} и мощности ${hero[key].power}`)
                                }
                            }
                            break;
                        case "3":
                           {
                                for(key in hero){
                                    sum += hero[key].power
                                    count++;
                                } 
                            }
                            console.log(sum/count)
                            break;
                        case "4":
                            let rand = Math.floor(Math.random()*4);
                            console.log(`${hero[rand].name} выграл войну`)
                    }
