/* let car = {
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
} */

/* function first() {
    return this;
}

console.log(first()===global);
 */
//this is node's global object
//because that's where the 
//first method was called


/* function second() {
    'use strict';

    return this;
}

console.log(second() === global);
console.log(second() === undefined); 
*/




//this depends on HOW a function is called

// An object can be passed as the first argument to call
// or applyand this will be bound to it

/* let myObject = { value: 'My Object' };

// value is set on the global object
globalThis.value = 'Global object';

function third(name) {
    // Returns something different depending on how
    // we call this method
    return this.value + name;
}

//console.log(third());

//Both call and apply allow you to explicitly set 
// what you want to represent 'this'. The diference
// is in how additional arguments to the function are sent



console.log(third.call(myObject, ' bob'));
console.log(third.apply(myObject, [' bob']));
 */



function fifth() {
    console.log(this.firstname + ' ' + this.lastname);
}

let customer1 = {
    firstname: 'john',
    lastname: 'wick',
    print: fifth
}

let customer2 = {
    firstname: 'dave',
    lastname: 'ross',
    print: fifth
}

customer2.print();
customer1.print();


