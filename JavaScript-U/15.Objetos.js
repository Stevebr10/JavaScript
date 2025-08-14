//OBJETOS -----------------------------------------------------------------------
//Un objeto es una coleccion de datos y/o funcionalidades

let persona ={
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador"
}

//Accedemos a los datos de nuestro obejto

console.log(persona.nombre) //Juan
console.log(persona.edad) //30
console.log(persona.profesion) //Desarrollador

//AGREGAR METODOS A OBJETOS -----------------------------------------------------
//Podemos agregar funciones dentro de nuestro objeto pero en este caso referenciamos a las propiedades
// del objeto con la palabra this

let persona1 = {
    nombre: "Juan1",
    edad: 30,
    profesion: "Desarrollador",
    saludar: function() {
        //console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
        return `Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.`
    }
}
console.log(persona1.nombre) //Juan1
persona1.saludar() //Hola, mi nombre es Juan1 y tengo 30 años.
console.log(persona1.saludar()) //Hola, mi nombre es Juan1 y tengo 30 años. undefined si se usa sin el return

// Regla rápida para no confundirse:
// Si solo quieres mostrar algo en la consola → usa console.log.
// Si quieres usar el valor después (guardarlo, sumarlo, compararlo, pasarlo a otra función, etc.) → usa return.


//NOTA: En una funcion en JS si no tiene el return, se devuleve automaticamente el undefined


