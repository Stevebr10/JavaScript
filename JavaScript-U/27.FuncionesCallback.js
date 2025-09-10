//FUNCIONES CALLBACK
//Es una funcion que se pasa como argumento a otra funcion
//Se ejecuta dentro de la funcion que la recibe
//Ejemplo:

function imprimir (mensaje){
    console.log(mensaje)
}
function sumar(a, b,funcionCallback){
    let resultado = a+b
    funcionCallback(`El resultado es: ${resultado}`)
}
sumar(3,4, imprimir)

//------------------------------------------------------------------------------------------------------
//Otra forma de usar funciones callback es con funciones anonimas o funciones flecha
sumar(5,7, function(mensaje){
    console.log(mensaje)
})

sumar(8,9, (mensaje) => {
    console.log(mensaje)
})  
//------------------------------------------------------------------------------------------------------
//FUNCION SETTIMEOUT
//Es una funcion que se ejecuta despues de un tiempo determinado
//Recibe dos parametros: una funcion y un tiempo en milisegundos
//Ejemplo:

function miFuncionCallback(){
    console.log("Saludo asincrono despues de 3 segundos")
}

setTimeout(miFuncionCallback, 3000) //despues de 3 segundos
setTimeout(function(){console.log("Saludo asincrono despues de 4 segundos")}, 4000) //despues de 4 segundos
setTimeout(()=> console.log("Saludo asincrono despues de 5 segundos"), 5000) //despues de 5 segundos

//------------------------------------------------------------------------------------------------------
//FUNCION 
//Es una funcion que se ejecuta de manera repetitiva cada cierto tiempo
//Recibe dos parametros: una funcion y un tiempo en milisegundos
//Ejemplo:
let reloj = () => {
    let fecha = new Date()
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

//setInterval(reloj, 1000) //cada segundo
setInterval(()=> {
    let fecha = new Date()
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}, 5000) //cada 5 segundos


