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