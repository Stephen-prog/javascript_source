let a = 'first';

function scopetest() {
    console.log(a);

    if (a != '') {
        console.log(a);

        let c = 'third';
    }

    //console.log(c);

    //let b = 'second';
}

scopetest();
//console.log(b);