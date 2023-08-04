/*
Cálculo del promedio de una lista de números. Dada una lista de 'n' 
números, debemos sumarlos y dividir la suma por 'n' para obtener el 
promedio.
*/
let listaNumero = [];
let numElementos = parseInt(prompt("Ingresar la cantidad de numeros a almacenar: "));



function obtenerListaNumeros(lista, elementos) {
    for (let i = 0; i < elementos; i++) {
        lista.push(parseInt(prompt("Ingrese  un numero "))); 
    }
}


function calcularSuma(listaNumero) {
    let suma = 0;
    
    for (let i = 0; i < listaNumero; i++) {
        suma += listaNumero[i]
    }
    
    //console.log(suma);
    return suma;
}

function calcularPromedio(listaNumero){
    const sumaTotal = calcularSuma(listaNumero);
    const prom = sumaTotal / listaNumero.length;

    return prom;
}

function promListaNum(listaNumero,numElementos) {
    obtenerListaNumeros(listaNumero, numElementos);
    calcularPromedio();
}