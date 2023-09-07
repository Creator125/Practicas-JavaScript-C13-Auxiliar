/*
8- Se desea elaborar un algoritmo que determine cuántas personas de un grupo
tienen hijos y cuántos no tienen, además se desea conocer el promedio del número 
de hijos
*/

let n = parseInt(prompt("Ingrese la cantidad de usuarios: "));
let i = 0
let cant;
let contHijos;
let contNoHijos;

while (i >= n) {
    cant = parseInt(prompt("Ingrese la cantidad de hjos: "));

    if(cant != 0){
        contHijos++;
    }else{
        contNoHijos++;
    }

    i++;
}

let promHijos = contHijos / n;

