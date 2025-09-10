//BLOQUE TRY CATCH FINALLY 
//El bloque try...catch...finally nos permite manejar errores de manera controlada en nuestro código JavaScript.
//El bloque try contiene el código que puede generar un error, el bloque catch maneja el error si 
// ocurre, y el bloque finally se ejecuta siempre al final, independientemente de si hubo un error o no.
//Ejemplo:
function dividir(a, b){
    try {
        if(b===0){
            throw new Error("No se puede dividir por cero.")
        }
    }catch(error){
        console.log("Error: " + error.message)
    }
}
dividir(4,0)

'use strict' 
//El modo estricto ayuda a detectar errores comunes y a evitar malas prácticas en el código JavaScript.

//Ejemplo:
let resultado = "hola"

try {
    x = 10
    if(isNaN(resultado)) throw "El resultado no es un numero"
}catch(error){
    console.log("Se produjo un error: " + error)
}