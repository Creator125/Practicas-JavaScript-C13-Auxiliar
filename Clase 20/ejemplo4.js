function defer(f, ms){
        return function (){ 
            setTimeout(() => {
                f.apply(this, arguments);
                console.log({arguments});
        }, ms);
    };
}
function sayHi(who){
    console.log("Hola, " + who) ;
}

let sayHiDeferred = defer (sayHi, 2866);
sayHiDeferred("John"); // Hello, John después segundos