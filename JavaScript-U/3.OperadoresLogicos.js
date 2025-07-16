//OPERADORES LOGICOS
//&& -> and -> regresa verdadero si ambos valores logicos son verdaderos
// || -> or -> Regresa verdadero si cualquiera de los operadores son verdaderos
// ! not (NO) -> Invierte el resultado logico  -> !x
let a = true
let b = false
console.log(a)
console.log(b)

//OPERADOR LOGICO AND 
console.log(`${a} && ${b} -> ${a&&b}`)

//OPERADOR LOGICO OR
console.log(`${a} || ${b} -> ${a||b}`)

//OPERADOR LOGICO NOT
console.log(`!${a}->${!a}`)

//VALOR DENTRO DEL RANGO
//EJEMPLO
let minimo = 0
let maximo = 5

//valor a analizar dentro del rango
let dato = 3

//valor para saber si esta dentro del rango
let dentroRango = dato>=minimo && dato <= maximo

console.log('valor dentro del rango?', dentroRango)

//Ejemplo precedencia de operadores

/*
1. Parentesis y Corchetes () []
2. Operadores unarios, -, ++, --, !
3. Aritmeticos *, /, %
4. Aritmeticos +,  -
5. Relacionales <,>,>=, <=
6. Igualdad ==, !=
7. Logicos  &&, ||
8. Asignacion  =, =+, -=, *=, etc
*/

//Ejemplo

let d= 12/4 +3*2 -1
console.log(d)
