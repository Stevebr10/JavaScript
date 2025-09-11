//PROMESAS JS
//Son objetps que representan la finalizacion o el fracaso de una operacion asincrona
//Tienen tres estados: pediente, cumplido, rechazado
//Se cran con la palabra reservada new Promise
//Sintaxis:
//let promesa = new Promise(function(resolve, reject){})
//NOTA:
// Entonces:
// ✅ Si quieres reutilizar la función → la guardas en una variable (const saludo = ...).
// ✅ Si la necesitas una sola vez, como callback o ejecución inmediata → no hace falta guardarla.

//Ejemplo:
let promesa = new Promise((resolve, reject)=>{
    let expresion = true
    if (expresion){
        resolve("La promesa se cumplio, todo salio bien")
    }else{
        reject("La promesa no se cumplio, todo salio mal")
    }
})
promesa
.then((mensaje)=>{console.log(mensaje)})
.catch((mensaje)=>{console.log(mensaje)})
.finally(()=>{console.log("Termino la promesa")})

//Ejemplo 2:
//este ejemplo tiene un retraso de 3 segundos y lo que hace es mostrar un mensaje despues de ese tiempo
//Como se llama a una promesa, se usa el metodo then para manejar la respuesta cuando se cumple
//En este caso, la promesa se cumple despues de 3 segundos y muestra el mensaje
//Por que se pasa una funcion flecha cuando se usa el metodo then ? 
//Por que el metodo then espera una funcion como argumento, que se ejecutara cuando la promesa se cumpla
//En este caso, la funcion flecha recibe el mensaje que se pasa al resolver la promesa y lo muestra en consola
//Si no se usara una funcion flecha, no se podria manejar la respuesta de la promesa
let promesa2 = new Promise((resolve)=>{
    setTimeout(()=> resolve("Promesa 2 cumplida despues de 3 segundos"),3000)
})
promesa2.then((mensaje)=>{console.log(mensaje)})

//Ejemplo 3:
//En este ejemplo se crea una promesa que se cumple si un numero es par y se rechaza si es impar
//Se usa el metodo then para manejar la respuesta cuando se cumple y el metodo catch para manejar el 
// error cuando se rechaza
//Finalmente, se usa el metodo finally para ejecutar un codigo que se ejecuta siempre al final
//Este ejemplo de promesa 3 tiene ventaja a un if else comun, por que permite manejar de forma
// asincrona la logica, ademas de que permite encadenar varias operaciones de forma mas sencilla
// y manejar errores de forma mas clara, es decir en palabras mas simples, es mas facil de leer y entender
//Tambien permite manejar operaciones que pueden tardar en completarse, como llamadas a APIs o 
// operaciones con bases de datos, sin bloquear el hilo principal de ejecucion
let numero = 4
let promesa3 = new Promise((resolve, reject)=>{
    if (numero %2 == 0){
        resolve(`El numero ${numero} es par`)
    }else{
        reject(`El numero ${numero} es impar`)
    }
})
promesa3
.then((mensaje)=>{console.log(mensaje)})
.catch((mensaje)=>{console.log(mensaje)})
.finally(()=>{console.log("Termino la promesa 3")})

//Ejemplo 4:
//En este ejemplo se crea una promesa que simula una llamada a una API
//Se usa el metodo then para manejar la respuesta cuando se cumple y el metodo catch para manejar el
// error cuando se rechaza
//Finalmente, se usa el metodo finally para ejecutar un codigo que se ejecuta siempre al final

let llamadaAPI = new Promise((resolve, reject)=>{
    let exito = false
    setTimeout(()=>{
        if(exito){
            resolve("Llamada a la API exitosa")
        }else{
            reject("Llamada a la API fallida")
        }
    }, 5000)
})
llamadaAPI
.then((mensaje)=>{console.log(mensaje)})
.catch((mensaje)=>{console.log(mensaje)})
.finally(()=>{console.log("Termino la llamada a la API")})