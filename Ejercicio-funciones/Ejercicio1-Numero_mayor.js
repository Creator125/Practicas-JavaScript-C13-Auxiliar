/*
Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el 
número mayor de ellos, si son iguales devolver un String «son iguales»
*/

//Usaré funcion tradicional

function numeroMayor(a, b, c) {
    if((a > b) && (a > c)){
        return a;
    }else if((b > a) && (b > c)) {
        return b;
    }else if((c > a) && (c > b)){
        return c;
    }else{
        return "son iguales"
    }
}
alert("Numero mayor: "+ numeroMayor(90, 5, 9));
