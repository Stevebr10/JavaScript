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

//Funciona exactamente igual con el return porque estamos retornando un nuevo valor, no modificando el original.

function modificarValor1(valor){
    valor=21
    console.log(valor) 
    // Si queremos ver el valor modificado fuera de la funcion,
    // debemos retornar el nuevo valor y asignarlo a la variable original.
    return valor
}

let numero1 = 5
numero1 = modificarValor1 (numero1)
console.log(numero1)
