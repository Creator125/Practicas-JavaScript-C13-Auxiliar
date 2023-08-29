const persona = {
    nombre: "Raul",
    apellido: "Moscos",
    vehiculo: {
        tipo: "Carro",
        marca: "Ferrary",
        modelo: "2022"
    },
    edad: 40
}

//Operador espres
const argumentos = (...persona) => {
    return persona;
}

console.log(persona);