//FUNCIONES FLECHA
//Es una forma mas corta de escribir funciones
//No es necesario usar la palabra reservada function
//No es necesario usar la palabra reservada return
//No es necesario usar llaves {}
//Si solo tiene un parametro no es necesario usar parentesis ()
//Ejemplo:

let miFuncionFlecha = () =>{
    console.log("Funcion Flecha")
}

function miFuncionFlecha2(){
    console.log("Funcion Normal")
}

const miFuncionFlecha3 = ()=> console.log("Funcion Flecha sin llaves y return implicito")

miFuncionFlecha()
miFuncionFlecha2()
miFuncionFlecha3()

const regresarObjeto = () => ({nombre: "Juan", apellido: "Perez"})
console.log(regresarObjeto())

const funcionConParametros = (mensaje) => console.log(mensaje)
funcionConParametros("Hola con parametros")

const funcionConParametros2 = (a, b) =>{
    let resultado = a+b
    //return console.log(resultado)
    return resultado
}
console.log(funcionConParametros2(3,4))
//Si solo tiene un parametro no es necesario usar parentesis ()
const funcionConUnParametro = mensaje => console.log(mensaje)
funcionConUnParametro("Hola con un parametro")
console.log(funcionConUnParametro("Hola con un parametro"))

