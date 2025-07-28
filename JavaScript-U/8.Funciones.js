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

