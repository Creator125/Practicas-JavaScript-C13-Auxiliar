/*
Crear una función inversa() que calcule la inversión de una cadena y lo retorne. 
Por ejemplo, la cadena «Hola Mundo» debería retornar la cadena «odnum aloh» (retornar todo el String en minúsculas).
*/

let inversa = (text) => {
    return text.split('').reverse().join('');
}

let texto = "Bailemos de vitoria y perrote espiando";
let textoInverso = inversa(texto);

console.log(textoInverso);