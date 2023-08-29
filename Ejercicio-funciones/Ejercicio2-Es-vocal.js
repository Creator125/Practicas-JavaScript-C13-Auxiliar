/**
Escriba una función con el nombre de esVocal() que tome un carácter, 
devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.
*/

//Usaré la funcion tradicional

function esVocal(mychar) {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    if (vocales.includes(mychar)) {
        return true;
    } else {
        return false;
    }
}

letra = "a";

if (esVocal(letra) == true) {
    alert("El carácter es una vocal");
}else{
    alert("El carácter no es una vocal");
}