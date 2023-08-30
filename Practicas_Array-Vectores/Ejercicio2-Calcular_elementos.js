/*
2. Elaborar un algoritmo para generar un vector de N cantidad de elementos y
que haga las siguientes operaciones con los datos: suma y multiplicación
entre los elementos del vector.
*/

let cantElementos = parseInt(prompt("Ingrese la cantidad de elementos: "));
let elementos = new Array();

for (let i = 0; i < cantElementos; i++) {
    valorAleatorio = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    elementos.push(valorAleatorio);
}

let suma = elementos.reduce((a,b) => a + b);
let multiplicacion = elementos.reduce((a,b) => a * b);

console.log(elementos);
console.log("Suma: "+ suma);
console.log("Multiplicacion: " + multiplicacion);