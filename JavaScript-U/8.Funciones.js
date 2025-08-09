//Definicion de funcoines
//Una funciion es un bloque de codigo reutilizabla, que realiza una tarea en particular

//Una funcion puede tener parametros de entrada (opcionales) y devuelve un valor de salida

//Sintaxis de una funcion
// function <nombre de la funcion>(<parametros>){cuerpo de la funcion  return<valor retornado>}fin

//Diferencia entre parametros y argumentos
//Parametros: Son las variables que se definen en la funcion
//Argumentos: Son los valores que se pasan a la funcion cuando se llama

//Definicion de funcion
function suma(a, b) {
    return a + b;
}   
function resta(a, b){
    return a -b;
}
let a = 10;
let b = 5;

//Llamada a la funcion
console.log(suma(a,b))

//Diferencia entre procedimiento y funcion
//Procedimiento: Es una funcion que no devuelve un valor    
//Funcion: Es una funcion que devuelve un valor
a = 10;
b = 5;

//Definicion de Procedimiento
function imprimirSuma(a,b){
    console.log("suma es "+(a+b))
}

//Llamada al procedimiento
imprimirSuma(5,6)

//Tipos de funciones
//Fucniones declarativas: Son las funciones que se definen con la palabra clave function
//Fucniones expresivas: Son las funciones que se definen como una variable  
//Fucniones flecha: Son las funciones que se definen con la sintaxis de flecha
//Fucniones anonimas: Son las funciones que no tienen nombre
//Fucniones de orden superior: Son las funciones que reciben otras funciones como parametros o devuelven funciones como resultado
//Fucniones recursivas: Son las funciones que se llaman a si mismas
//Funciones definidas por el usuario: Son las funciones que se definen por el usuario
//Funciones predefinidas: Son las funciones que ya estan definidas en el lenguaje en este caso JS

//Ejemplo de Procedimiento
//Definicion de un procedimiento -> El procedimiento al parecer no devuelve un valor pero en realidad 
// regresa undefined
function saludar(mesaje){
    console.log(`Mensaje: ${mesaje}`)
}

//Llamada al procedimiento
saludar("Hola que hubo como esta el mundo")

//Funciones en JS

//Declaramos la suma
function suma(a, b){
    let resultado = a+b
    return resultado
}

// Llamamos o invocamos la funcion
suma(3, 5)