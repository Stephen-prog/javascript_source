
let car = {
    make: 'bmw',
    model: ' 745li',
    year: '2010',
    getPrice: function() {
        // perform some calc
        return 5000;
    },
    printDescription:function(){
        console.log(this.make + '' + this.model);
    }
}

car.printDescription();
console.log(car.year);

// console.log(car['year']);


/*
var anotherCar = {};
anotherCar.benz = 'c-class';
console.log(anotherCar.benz);
*/

/*
var a = {
    myProperty: { b: 'mansion' }
};
console.log(a.myProperty.b);
*/

/*
var c = {
    myProperty: [,
        { d: 'opor'},
        { e: 'its plenty'},
        { f: 'soro soke'},
        { g: 'tuale'},
    ]
};
*/

let carLot = [
    { year: 2014, make: 'Mercedes-benz', model: 'G550',},
    { year: 2005, make: 'Lexus', model: 'rx330',},
    { year: 2020, make: 'BMW', model: '528i',},
    { year: 2008, make: 'Ford', model: 'F150',},
    { year: 2010, make: 'Toyota', model: 'PRADO',},
];
console.log(carLot);