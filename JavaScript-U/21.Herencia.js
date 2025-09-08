//HERENCIA 
//Es la capacidad que tiene una clase de heredar atributos y metodos de otra clase padre
//La clase que herada se llama clase hija o subclase
//La clase que hereda se llama clase padre o superclase
//La herencia se implementa con la palabra reservada extends

class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    get getNombre(){
        return this.nombre
    }
    get getApellido(){
        return this.apellido
    }
    get getEdad(){
        return this.edad
    }
    set setNombre(nombre){
        return this.nombre = nombre
    }
    set setApellido(apellido){
        return this.apellido = apellido
    }
    set setEdad(edad){
        return this.edad = edad
    }
    nombreCompleto(){
        return this.nombre + ' ' + this.apellido + ' ' + this.edad
    }
    //Sobreescritura el metodo de la clase padre
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el polimorfismo es la capacidad que tiene un objeto de tomar muchas formas
        //El metodo que se ejecuta depende si es una referencia de tipo padre o hija
        return this.nombreCompleto()
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, edad, departamento){
        super(nombre, apellido, edad) //LLama al constructor de la clase padre
        this.departamento = departamento
    }
    get getDepartamento(){
        return this.departamento
    }
    set setDepartamento(departamento){
        return this.departamento = departamento
    }

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this.departamento
    }
}
let empleado1 = new Empleado('Luis', 'Gomez', 28, 'Sistemas')
console.log(empleado1.getNombre)
console.log(empleado1.getApellido)
console.log(empleado1.getEdad)
console.log(empleado1.getDepartamento)
console.log(empleado1.nombreCompleto())
console.log(empleado1.toString()) //Se ejecuta el toString de la clase hija

let persona1 = new Persona('Ana', 'Diaz', 22)
console.log(persona1.toString()) //Se ejecuta el toString de la clase padre

// el polimorfismo es la capacidad que tienen los métodos o funciones de comportarse de
//  manera diferente dependiendo del objeto que los use, aunque compartan el mismo nombre.
// En otras palabras: un mismo método puede tener distintos comportamientos según la clase u objeto.

//📌 Tipos principales

// Polimorfismo por sobrecarga (Overloading)
// Ocurre cuando dos métodos tienen el mismo nombre pero distintos parámetros.
// En JavaScript esto no existe directamente (sí en Java, C#, etc.), pero se puede simular.

// Polimorfismo por sobrescritura (Overriding)
// Ocurre cuando una clase hija redefine un método de la clase padre con un comportamiento diferente.
// Este sí se usa mucho en JavaScript, Python, Java, etc.

//----------------------------------------------------------------------------------------------------------
// PALABRA STATIC
// La palabra reservada static define un metodo o propiedad estatica de una clase
// Los metodos estaticos no se heredan, ni se crean con el objeto
// Se accede a ellos directamente desde la clase
class Matematica {
    static sumar(a, b){
        return a + b
    }
    static restar(a, b){
        return a - b
    }

}
console.log(Matematica.sumar(5, 3))
console.log(Matematica.restar(5, 3))
// const m1 = new Matematica() //No se puede crear un objeto de una clase estatica
// console.log(m1.sumar(5, 3)) //No se puede acceder a un metodo estatico desde un objeto

//----------------------------------------------------------------------------------------------------------
// ATRIBUTOS ESTATICOS
class Persona1 {
    static contadorPersonas = 0 //Atributo estatico

    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    get getNombre(){
        return this.nombre
    }
    get getApellido(){
        return this.apellido
    }
    get getEdad(){
        return this.edad
    }
    set setNombre(nombre){
        return this.nombre = nombre
    }
    set setApellido(apellido){
        return this.apellido = apellido
    }
    set setEdad(edad){
        return this.edad = edad
    }
    nombreCompleto(){
        return this.nombre + ' ' + this.apellido + ' ' + this.edad
    }
    //Sobreescritura el metodo de la clase padre
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el polimorfismo es la capacidad que tiene un objeto de tomar muchas formas
        //El metodo que se ejecuta depende si es una referencia de tipo padre o hija
        return this.nombreCompleto()
    }
}

console.log(Persona1.contadorPersonas) //0
let persona3 = new Persona1('Pedro', 'Ramirez', 35)
Persona1.contadorPersonas++ //Incrementa el contador de personas
console.log(Persona1.contadorPersonas) //1
let persona4 = new Persona1('Maria', 'Lopez', 29)
Persona1.contadorPersonas++ //Incrementa el contador de personas
console.log(Persona1.contadorPersonas) //2

// No se puede acceder a un atributo estatico desde un objeto
// console.log(persona3.contadorPersonas) //undefined

//----------------------------------------------------------------------------------------------------------
// EJEMPLOS DE USO DE LA PALABRA STATIC
class Persona2 {
    static contadorPersonas = 0 //Atributo estatico

    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.idePersona = ++Persona2.contadorPersonas
    }
    get getNombre(){
        return this.nombre
    }
    get getApellido(){
        return this.apellido
    }
    get getEdad(){
        return this.edad
    }
    set setNombre(nombre){
        return this.nombre = nombre
    }
    set setApellido(apellido){
        return this.apellido = apellido
    }
    set setEdad(edad){
        return this.edad = edad
    }
    nombreCompleto(){
        return this.idePersona +' '+ this.nombre + ' ' + this.apellido + ' ' + this.edad
    }
    //Sobreescritura el metodo de la clase padre
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el polimorfismo es la capacidad que tiene un objeto de tomar muchas formas
        //El metodo que se ejecuta depende si es una referencia de tipo padre o hija
        return this.nombreCompleto()
    }
}

class Empleado2 extends Persona2 {
    constructor(nombre, apellido, edad, departamento){
        super(nombre, apellido, edad) //LLama al constructor de la clase padre
        this.departamento = departamento
    }
    get getDepartamento(){
        return this.departamento
    }
    set setDepartamento(departamento){
        return this.departamento = departamento
    }

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this.departamento
    }
}

let persona1A = new Persona2('Mario', 'Diaz', 40)
console.log(persona1A.toString())

let empleado1A = new Empleado2('Camila', 'Delgado', 32, 'Ventas')
console.log(empleado1A.toString())