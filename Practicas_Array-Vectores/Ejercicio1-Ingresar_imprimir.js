/*
1. Hacer un algoritmo que permita ingresar 5 valores enteros a un vector e
imprima los datos que se ingresaron.
*/

let nums = [];

//Ingresar valores
for (let i = 0; i < 5; i++) {
    nums[i] = parseInt(prompt(`Ingrese un numero en la posicion ${i}`));
}

//Mostrar valores
let numeros = nums.toString();
alert("Numeros ingresados: "+ numeros);
