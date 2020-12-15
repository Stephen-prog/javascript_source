let a, b, c, d, e;

let names = [ 'mike', 'chris', 'dave', 'steve', 'danny' ];

/*
[a, b, c, e, d] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
 */

/* 
let others;

[a, b, ...others] = names;

console.log(a);
console.log(b);
console.log(others); 
*/


let year, model;
({year, model} = {
    make: 'toyota',
    model: 'prado',
    year: 2019,
    value: 10000
});

console.log(year);
console.log(model)


