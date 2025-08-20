//Operadores de asignsacion

let minumero=10;
console.log(minumero);

minumero=20;
console.log('el resultado es: '+ minumero);

//Operador +=
minumero += 5 // suma 5 al valor actual de minumero, minumero = minumero + 5
console.log(minumero)

//Operador -=
minumero -= 3 // resta 3 al valor actual de minumero, minumero = minumero - 3
console.log(minumero)

//Operador *=
minumero *= 2 // multiplica por 2 al valor actual de minumero, minumero = minumero * 2
console.log(minumero)

//Operador /=
minumero /= 4 // divide entre 4 al valor actual de minumero, minumero = minumero / 4
console.log(minumero)

//Operador %=
minumero %= 2 // obtiene el residuo de la division entre 2 al valor actual de minumero, minumero = minumero % 2 
console.log(minumero)

//Exponente **
minumero **=2 // eleva al cuadrado el valor actual de minumero, minumero = minumero ** 2
console.log(minumero)

//OPERADORES DE COMPARACION

//Operadores relacionales
let a = 5
let b = '5'

console.log(a) // mismo valor diferente tipo de dato con b
console.log(b) 

//Operadores de Igualdad ==
// solo compara valores, y hace una conversion si es necesario
console.log("a == b ->", a==b)

// Operadores de Igualdad ===
//Compara valores y el tipo de datos
console.log("a === b ->", a===b)

//String INterpolation
console.log("Texto......${a}")  // No funciona si queremos imprimir una variable
console.log('Texto...${a}')     // Tampoco funciona si queremos imprimir una variable
console.log(`Texto...${a}`)     // Funciona si se utiliza las tildes invertidas
// en este caso convierte la variable a string y lo concatena 

// Podemos concatener con un +
console.log("texto..."+ (a==b))
// Podemos usar solo una coma para concatenar
console.log("texto...", a==b)
// Podemos concatenar con las tildes invertidas ``
console.log(`Texto ... ${a} == ${b} -> ${a==b}`)

//Operador Distinto
// Compara el valor y convierte el tipo de dato si es neesario
console.log(`${a} != ${b} -> ${a!=b}`)

//Operador distinto Exacto
//Compara el valor y el tipo de dato
console.log(`${a} !== ${b} -> ${a!==b}`)

//Operadore mayor menor que o igual
console.log(`${a} > ${b} -> ${a>b}`)








