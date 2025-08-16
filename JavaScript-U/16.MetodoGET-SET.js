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
//Este metodo nos permite modificar la propiedad o atributo de un objeto

let persona1 = {
    nombre: "Mario",
    edad: 29,
    profesion: "Desarrollador",
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase()
    },
    set lang(lang){
        this.idioma = lang.toUpperCase()
    },
    get nombreCompleto(){
        return this.nombre + " " + this.edad
    }
}

console.log(persona1.lang) //Muestra el idioma en mayusculas - No es necesario colocar los ()
persona1.lang = "en" //Cabiamos el idioma al ingles
console.log(persona1.lang) //Muestra el idioma en mayusculas
console.log(persona1.idioma)

function suma(a, b){
    let resultado =a+b
    console.log(resultado)
}
console.log(suma(8,9))


//NOTAS ----------------------------------------------------------------------------
// 2️⃣ En el caso del get y set
// get lang() {
//     return this.idioma.toUpperCase();
// },
// set lang(lang) {
//     this.idioma = lang.toUpperCase();
// }


// El getter (get lang) es como una propiedad calculada: siempre devuelve algo (en tu caso, this.idioma.toUpperCase()), así que nunca será undefined salvo que el valor interno lo sea.

// El setter (set lang) no devuelve nada (su propósito es asignar), por eso cuando lo usas:
// persona1.lang = "en"
// no ves nada, pero internamente cambia la propiedad idioma.

// Resumen:

// Función sin return → devuelve undefined.

// Getter → devuelve lo que pongas en el return del getter.

// Setter → no devuelve nada; su trabajo es modificar el valor.
