class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
    get getNombre(){
        return this.nombre
    }
    get getApellido(){
        return this.apellido
    }
    set setNombre(nombre){
        return this.nombre = nombre
    }
    set setApellido(apellido){
        return this.apellido = apellido
    }
}

console.log("Archivo persona.js cargado")