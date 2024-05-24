class Car{
    constructor(brand, fuel, year){
        this.brand = brand
        this.fuel = fuel
        this.year = year
    }
}

class Truck extends Car{
    constructor(brand, fuel, year, body, tire){
        super(brand, fuel, year);
        this.body = body;
        this.tire = tire;
    }
    run(){
        console.log(`Машина: ${this.brand}. Топливо:${this.fuel}. Год производства:${this.year}. Наличие прицепа:${this.body}. Колесная формула:${this.tire}`)
    }
}

const miniTruck = new Truck('Ford','Diesel','2005','с прицепом', '4x2');

miniTruck.run();
