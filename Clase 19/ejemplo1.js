function crearPersona(nombre, apellido) {
    return{
        nombre: nombre,
        apellido: apellido,
    }
}

const persona = crearPersona("David", "Caballos");
console.log({persona});