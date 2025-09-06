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
