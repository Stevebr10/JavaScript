//METODO GET EN JS -----------------------------------------------------------------------------------
//El metodo Get nos permite obtener el valor de una propiedad de un objeto

let persona = {
    nombre: "Mario",
    edad: 29,
    profesion: "Desarrollador",
    get nombreCompleto(){
        return this.nombre + " " + this.edad
    }
}

//Podemos acceder de esta forma sin usar el GET

console.log(persona.nombre)
console.log(persona["edad"])
console.log(`Hola mi nombre es ${persona.nombre} tengo ${persona.edad} años y soy ${persona["profesion"]}`)

//Podemos usar el GET para acceder a las propiedades de un objeto

console.log(persona.nombreCompleto)

//METODO SET EN JS --------------------------------------------------------------------------
