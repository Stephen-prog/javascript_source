// class declaration
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    print() {
        console.log(`${this.make} ${this.model} (${this.year})`)
    }
}

let myCar = new Car('bmw', 'X7', 2020);
myCar.print();

// expression
// let car = class{
// }


class SportsCar extends Car {
    
}

let mySportsCar = new SportsCar('lamborghini', 'aventador', 2019);
mySportsCar.print();


