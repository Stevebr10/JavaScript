// Paso Valor en JS

//Cuando pasamos informacion de tipo primitivo a una funcion
// se pasa una copia del valor, no la referencia a la variable original.
// Esto significa que si modificamos el valor dentro de la funcion,
// no afectamos la variable original fuera de la funcion.

function modificarValor(Valor){
    Valor=10
    console.log(Valor)
}

let numero = 5
modificarValor(numero)
console.log(numero)



    