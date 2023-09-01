//Escribe una función llamada calcularFactorial que tome un número como argumento

function calcularFactorial(numero){
    numero = Math.abs(numero);
    if(numero === 0){
        return 1;
    }

    let resultado = numero * calcularFactorial(numero -1);
    return resultado;
}

console.log(calcularFactorial(5));