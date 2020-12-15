/* let car = {
    make: 'renault',
    model: 'trevor',
    year: 2108,
};  */

/* function Car(make, model, year) {
    this.make=make; 
    this.model=model;
    this.year=year;
}

let myCar = new Car('renault', 'trevor', 2108);

console.log(myCar); */

function MyFunction() {
    console.log('I am a simple function');
}

let myFunction = new MyFunction();

console.log(typeof myFunction);

// Can't really do anything with this particular
// object ... it's certainly NOT a function
// reference anymore!
//  myFunction();