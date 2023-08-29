const misArgumentos = [10, true, false,"Obed","Córdoba"];

const [cantidad, activo, descuento, nombre, apellido] = misArgumentos;
    
function destructurando ({ cantidad, descuento }) {
console. log (cantidad);
console. log (descuento);
}

destructurando ({ cantidad, descuento });