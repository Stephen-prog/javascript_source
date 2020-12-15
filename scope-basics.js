let a = 'first';

function scopetest() {
    console.log(a);
    a = 'changed';

    let b = 'second';
    if (a != '') {
        console.log(a);
        console.log();
        let c = 'third';
    }

    //console.log(c);

    //let b = 'second';
}

scopetest();
//console.log(b);
console.log(a);