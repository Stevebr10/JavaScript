//CONSTRUCTOR EN JS-----------------------------------------------------------------
//Un constructor es una funcion especial que se utiliza para crear e inicializar objetos
// Se define utilizando una palabra clave "constructor" dentro de una clase

//Ejemplo con función constructora (forma antigua):
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.mostrarInfo = function() {
        console.log(`${this.nombre} tiene ${this.edad} años.`);
    };
}

const p1 = new Persona("Juan", 30);
p1.mostrarInfo();

//Ejemplo con clase (forma moderna):
// En JavaScript, un constructor se define dentro de una clase usando el método especial constructor().
// También puedes simular constructores con funciones, pero desde ES6 la forma recomendada es con class.
//ES6 es la sexta versión de ECMAScript, que es la especificación estándar de JavaScript.

class Persona1 {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.nombreCompleto = function(){
        return `${this.nombre} ${this.edad}`;
        }
    }
    mostrarInfo(){
        console.log(`${this.nombre} tiene ${this.edad} años.`);
    };
    

}

const p2 = new Persona1("Mario", 30)
p2.mostrarInfo();
console.log(p2.nombreCompleto())

//FORMAS DE CREAR UN OBJETO ---------------------------------------------------------------------
let miObjeto = new Object() // Forma constructora
let miObjeto2 = {} // Forma literal

let miCadena = new String("Hola") // Forma constructora
let miCadena2 = "Hola" // Forma literal

let mifuncion = new Function("a", "b", "return a + b;") // Forma constructora
let mifuncion2 = function(a, b) {
    return a + b;
}; // Forma literal
