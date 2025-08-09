// Paso por referencia JS
// Pasamos Objetos (array) por referencia
// Esto significa que si modificamos el objeto dentro de la funcion,
// estamos modificando la referencia original, y los cambios se reflejan fuera de la funcion.

function modificarObjeto(objeto) {
    objeto.nombre = "Nuevo Nombre";
    console.log("Dentro de la función:", objeto);
}   

let miObjeto = { nombre: "Nombre Original" };
modificarObjeto(miObjeto);
console.log("Fuera de la función:", miObjeto);

console.log(typeof miObjeto);



function cambiarValor(parametro){
    parametro[0] = 21
}
let arreglo =[1,2,3,4,5]
cambiarValor(arreglo)
console.log(arreglo)

function cambiarNombrePerona(ObjetoP){
    ObjetoP.nombre = "Sr X"
    console.log(ObjetoP)
}

let ObjetoPersona = {nombre: "Juan", edad: 30, email: "juan@example.com"}
cambiarNombrePerona(ObjetoPersona)
console.log(ObjetoPersona)

