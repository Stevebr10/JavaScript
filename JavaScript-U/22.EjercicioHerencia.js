//EJERCICIO DE HERENCIA

class Persona {

    static contadorPersonas = 0 // Atributo estatico
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.idPersona = ++Persona.contadorPersonas
        //this.idPersona = idPersona
    }
    get id_Persona(){
        return this.idPersona
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
    toString(){
        return this.idPersona + ' ' + this.nombre + ' '+ this.apellido + ' ' + this.edad
    }
}

class Empleado extends Persona {
    static contadorEmpleados = 0 // Atributo estatico

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad) //Llama al constructor de la clase padre
        this.sueldo = sueldo
        this.idEmpleado = ++Empleado.contadorEmpleados
    }
    // constructor(sueldo){
    //     this.sueldo = sueldo
    //      this.idEmpleado = ++Empleado.contadorEmpleados

    // }
    get id_Empleado(){
        return this.idEmpleado
    }
    get getSueldo(){
        return this.sueldo
    }
    set setSueldo(sueldo){
        return this.sueldo = sueldo
    }
    toString(){
        return super.toString() + ' ' + this.sueldo + ' ' + this.idEmpleado
    }
}

class Cliente extends Persona {
    static contadorClientes = 0 // Atributo estatico
    
    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad) //Llama al constructor de la clase padre
        this.id_Cliente = ++Cliente.contadorClientes
        //this.fechaRegistro = new Date(fechaRegistro) //Atributo de tipo fecha
        this.fechaRegistro = new Date() //Fecha actual
    }
    // constructor(fechaRegistro) {
    //     this.idCliente = ++Cliente.contadorClientes
    //     this.fechaRegistro = fechaRegistro
    // }
    get id_Cliente(){
        return this.idCliente
    }    
    get getFechaRegistro(){
        return this.fechaRegistro
    }
    set setFechaRegistro(fechaRegistro){
        return this.fechaRegistro = fechaRegistro
    }
    toString(){
        return super.toString() + ' ' + this.idCliente+' '+ this.fechaRegistro
    }
}

//Pruebas
let persona1 = new Persona('Juan', 'Perez', 30)
console.log(persona1.toString())

let persona2 = new Persona('Carlos', 'Lara', 23)
console.log(persona2.toString())

let empleado1 = new Empleado('Ana', 'Diaz', 25, 5000)
console.log(empleado1.toString())

let empleado2 = new Empleado('Maria', 'Huaraca', 33, 5000)
console.log(empleado2.toString())
console.log(empleado2.id_Empleado)