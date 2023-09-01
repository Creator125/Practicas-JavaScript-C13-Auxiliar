function ejemploFuncion(a, b) {
    return a + b;
}

//1. Usar la propiedad name: Muestra el nombre de la función en la consola
console.log("Nombre de la funcion: "+ejemploFuncion.name);

//2.Usar la propiedad length: Muestra la cantidad de parámetros que acepta la función en la consola
console.log("Longitud de la funcion: "+ejemploFuncion.length);

/*
3. Usar la propiedad prototype: Agrega un nuevo método llamado multiplicar al
prototipo de la función que multiplique dos números y devuelve el resultado.
*/
ejemploFuncion.prototype.multiplicar = function(a, b){
    return a * b;
}

const producto = new ejemploFuncion().multiplicar(2, 8);
console.log("Resultado de la propiedad prototype: "+producto);

/*
4. Usar la propiedad caller: Crea una nueva función llamada
llamarEjemploFuncion que llama a ejemploFuncion con dos argumentos y
muestra el resultado en la consola
*/
function llamarEjemploFuncion(x, y){
    suma = ejemploFuncion(x, y);
    return suma;
}

console.log(llamarEjemploFuncion(2, 3));