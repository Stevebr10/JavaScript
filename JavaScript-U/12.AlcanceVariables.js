//Variables globales: Estan disponibles en todo el programa, incluso dentro de funciones
let variableGlobal = "Soy una variable global";

function mostrarVariableGlobal() {
    console.log(variableGlobal);
}

mostrarVariableGlobal(); // "Soy una variable global"

//Variables locales: Estan limitadas al bloque en el que se definen
function mostrarVariableLocal() {
    let variableLocal = "Soy una variable local";
    console.log(variableLocal);
}

mostrarVariableLocal(); // "Soy una variable local", en realidad se hace un llamado a la funcion no a la variable local

//EJEMPLOS:

// Variable global: accesible en todo el programa
let global = "Soy global";

function ejemplo() {
    // Variable local: solo accesible dentro de esta función
    let local = "Soy local";
    console.log(global); // Puede acceder a la variable global
    console.log(local);  // Puede acceder a la variable local
}

ejemplo();

console.log(global); // Puede acceder a la variable global fuera de la función

// console.log(local); // Error: local is not defined (no se puede acceder a la variable local fuera de la función)

