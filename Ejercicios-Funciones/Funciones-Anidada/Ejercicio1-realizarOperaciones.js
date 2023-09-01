/*
Crea una función principal llamada realizarOperaciones que acepte dos 
números y una cadena que indique la operación ("suma", "resta", "multiplicacion" o "division")
*/

function realizarOperaciones(a, b, operacion) {
    function sumar(a, b){
        suma = a + b;
        return suma;
    }
    
    function restar(a, b){
        resta = a - b;
        return resta;
    }
    
    function multiplicar(a, b){
        mult = a * b;
        return mult;
    }
    
    function dividir(a, b){
        div = a + b;
        return div;
    }

    switch (operacion) {
        case "suma": return sumar(a, b);
            break;
        case "resta": return restar(a, b);
            break;
        case "multiplicacion": return multiplicar(a, b);
            break;
        case "division": return dividir(a, b);
            break;
        default: return "Operacion no valida"
            break;
    }
}


console.log(realizarOperaciones(2, 5, "suma"));