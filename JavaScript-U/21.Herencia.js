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