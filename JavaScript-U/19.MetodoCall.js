//USO DE CALL --------------------------------------------------------------------------------------
// call en js es un método que permite invocar una función con un valor específico de this.
// Es util cuando quieres "prestar" metodos de un objeto para que sean usado por otro o cuando
// necesitas establecer un contexto específico para la ejecución de una función.

//SINTAXIS -----------------------------------------------------------------------------------------
// funcion.call(thisArg, arg1, arg2, ...)
// func → la función que quieres invocar.
// thisArg → el objeto que quieres que se use como this.
// arg1, arg2, ... → argumentos que le pasas a la función.

let persona1= {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido
    }
}

let persona2= {
    nombre: "Carlos",
    apellido: "Mejia",
   
}

// Usando call para que persona2 use el metodo de persona1
console.log(persona1.nombreCompleto())
console.log(persona1.nombreCompleto.call(persona2))

// Ejemplo con argumentos
let persona3 = {
    nombre: "Ana",
    apellido: "Gomez",
    nombreCompleto: function(titulo, telefono){
        return this.nombre + ' ' + this.apellido + ' ' + titulo + ' ' + telefono
    }
}
console.log(persona3.nombreCompleto("Ing,", "2777567"))
console.log(persona3.nombreCompleto.call(persona2, "Lic.", "0986756543"))
// En este caso, usamos call para invocar nombreCompleto de persona3, pero con el contexto de persona2
// y le pasamos los argumentos titulo y telefono.
// Esto es especialmente útil para reutilizar métodos entre diferentes objetos sin necesidad de duplicar código.

//--------------------------------------------------------------------------------------------------
// METODO APPLY
// apply es similar a call, pero en lugar de pasar los argumentos uno por uno, los pasas como un array.
// Sintaxis -> funcion.apply(thisArg, [argsArray])
// Ejemplo:
console.log('\n USO DE APPLY \n')
console.log(persona3.nombreCompleto.apply(persona2, ["Sra.", "0998765432"]))
