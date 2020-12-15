function sayHello(name) {
    return function() {
        console.log('howdy ' + name);
    }
}

let bob = sayHello('bob');
let steve = sayHello('steve')
let stan = sayHello('stan')


bob();
steve();
stan();
