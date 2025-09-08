// CLASES EN JS
//Una clase es una plantilla para crear objetos y definir sus propiedades y comportamientos.
//Sintaxis -> class NombreClase { constructor(parametros) { ...} metodos {} }
// Las clases en JS son una forma más clara y concisa de crear objetos y manejar la herencia
// Ejemplo de una clase

// 👉 Resumen:

// En una clase, los métodos se escriben sin function.

// Si quieres, puedes definir funciones dentro del constructor como propiedades usando function.

// class Persona {
//   constructor(nombre) {
//     this.nombre = nombre;

//     // Aquí sí puedo definir usando function y asignarla a una propiedad
//     this.despedir = function() {
//       return `Adiós de parte de ${this.nombre}`;
//     };
//   }
// }

// const p1 = new Persona("Ana");
// console.log(p1.despedir()); // Adiós de parte de Ana

class Persona {
    constructor(nombre, aplellido, edad){
        this.nombre = nombre
        this.apellido = aplellido
        this.edad = edad
    }
    //Metodo
    nombreCompleto(){
        return this.nombre + ' ' + this.apellido + ' ' + this.edad
    }
    

}
let persona1 = new Persona('Juan', 'Perez', 30)
console.log(persona1)
console.log(persona1.nombreCompleto())

//METODO GET Y SET
//Get -> obtener un valor
//Set -> modificar o establecer un valor

class Persona2 {
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    //Metodo
    nombreCompleto(){
        return this.nombre + ' ' + this.apellido + ' ' + this.edad

    }
    //GET
    get getNombre(){
        return this.nombre
    }
    //SET
    set setNombre(nombre){
        return this.nombre = nombre
    }

}
let persona2 = new Persona2('Carlos', 'Lara', 25)
console.log(persona2)
console.log(persona2.nombreCompleto())
console.log(persona2.getNombre) //Acceder al get
persona2.setNombre = 'Roberto' //Modificar el nombre con el set
console.log(persona2.getNombre) //Acceder al get nuevamente para ver el cambio
console.log(persona2.nombreCompleto()) //Ver el nombre completo con el nuevo nombre

//HOISTING NO APLICA EN LAS CLASES
//No puedo hacer esto -> const p1 = new Persona3('Ana', 'Gomez', 28)
// class Persona3 {
//     constructor(nombre, apellido, edad){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad     
//     }
//     //Metodo
//     nombreCompleto(){
//         return this.nombre + ' ' + this.apellido + ' ' + this.edad   
//     }
// }
// const p1 = new Persona3('Ana', 'Gomez', 28)
// console.log(p1)
// console.log(p1.nombreCompleto()) 
//Si hago esto, me da error porque las clases no tienen hoisting