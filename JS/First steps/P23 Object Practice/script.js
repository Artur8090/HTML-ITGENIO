let catalog = {
    movie1: {
        name: "Spiderman",
        year: 2002,
        actors: ["Tobey Maguire", "William Dafoe", "J.K Simmons"] 
    },

    movie2: {
        name: "Jumanji",
        year: 2017,
        actors: ["Dwayne Jhonson", "Jack Black", "Kevin Hart"]
    },
    movie3: {
        name: "Sonic",
        year: 2020,
        actors: ["Jim Carey", "James Marsden"]
    }
}
/*
let quest = prompt("What is the name or year of the movie?")
for(let key in catalog){
    if(catalog[key].name == quest){
        console.log(catalog[key])
    } else if(catalog[key].year == quest){
        console.log(catalog[key])
    }
};
*/
let myCrazyObject = {
    "name": "a ridiculous object",
    "some array": [7,9,{purpose:"confusion",number: 123}, 3.3],
    "random animal": "Banana shark"
};

console.log(myCrazyObject["some array"][2].number);
