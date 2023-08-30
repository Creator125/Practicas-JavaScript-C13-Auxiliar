function hipotenusa(a, b){
    function cuadrado (x){
        return x*x;
    }

    return Math.sqrt (cuadrado (a) + cuadrado (b));
}

console.log(hipotenusa(1, 2));