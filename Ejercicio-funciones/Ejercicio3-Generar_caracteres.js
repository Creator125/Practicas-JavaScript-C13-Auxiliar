/*
Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y 
un carácter, retornar el carácter multiplicado por n.
Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».
*/

//Usare la funcion de expresion

let generar_caracteres = function (n, mychar) {
    let text = mychar;
    for (let i = 1; i <= n; i++) {
        text = text.concat(mychar);
    }

    return text;
}

let resul =  generar_caracteres(10, "a");
console.log(resul);