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


//CREACION DE OBJETOS EN JS ----------------------------------------------------------------------------
//Una de las forma de crear un objeto es la siguiente

let persona3 = {
    nombre: "Juan3",
    edad: 19,
    profesion: "Desarrollador"
}

//Tambien se puede reservar el espacio en memoria utlizando la palabra new Object();
// Despues se definen sus atributos o propiedades con nombreObjeto.NombrePropiedad= "contenido de la propiedad"

let persona4 = new Object()
persona4.nombre = "Juan4"
persona4.edad = 25
persona4.profesion = "Desarrollador"

console.log(persona4.nombre) //Juan4

//ACCEDER A LAS PROPIEDADES DE LOS OBJETOS ----------------------------------------------------------------
//Podemos acceder de la siguiente forma
console.log(persona4.profesion)
//podemos acceder en forma de un arreglo
console.log(persona4["edad"])
console.log(persona4["nombre"], persona4["profesion"])
console.log(`Mi nombre es ${persona4["nombre"]} y tengo ${persona4.edad} años`)

//Utilizamos un for para recorrer las propiedades del objeto -> FOR IN
for (let propiedad in persona4) {
    console.log(`La propiedad ${propiedad} tiene el valor ${persona4[propiedad]}`);
}
for(let propiedadesP in persona4){
    console.log(propiedadesP)
    console.log(persona4[propiedadesP])
}