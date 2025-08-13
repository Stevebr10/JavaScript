//Paso de Cadenas JS

//Cadenas y funciones
//Cadenas inmutables -> NO se puede cambiar su valor
//Las cadenas actuan como valores primitivos, si se intenta modificar una cadena, 
// se crea una nueva cadena en su lugar. Es decir, si tenemos la cadena "Hola" y
// intentamos cambiarla a "Hola Mundo", en realidad se creará una nueva cadena
// "Hola Mundo" y la variable original seguirá apuntando a "Hola".
//Ejemplo
let saludo = "Hola";
saludo = "Hola Mundo";
console.log(saludo); // "Hola Mundo"

// Si quieres conservar el valor original, debes guardarlo antes de reasignar
let saludo2 = "Hola";
let saludoOriginal = saludo2; // Guardas el valor original
saludo2 = "Hola Mundo";
console.log(saludoOriginal); // "Hola"
console.log(saludo2);        // "Hola Mundo"

// Ahora teniendo esto en cuenta, no podemos cabiar el valor de una cadena
// usando el paso por Valor ya que las cadenas son inmutables y no se pueden modificar directamente.

function cambiarValor(parametro){
    parametro = "Nuevo Valor"
}

//Llamamos a la funcion
let argumento = "Valor Original";
cambiarValor(argumento)
console.log(argumento); // "Valor Original"