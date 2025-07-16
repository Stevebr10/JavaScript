//Clicos -> repiten un bloque segun una condicion se cumpla
//TIPOS DE CICLOS

//CICLO WHILE

// while (condicion){}  la condicion es un valor logico true/false

//Imprimir los valores del 0 al 5 , cuando hay una sola linea de codigo se pueden omitir las llaves
let contador =0
let repeticiones = 5

while(contador<=repeticiones){
    console.log(contador)
    contador++
}

//CICLO DO WHILE
// Se difiere del while ya que ejecuta al menos una vexz el bloque se codigo ya que la condicion se 
//coloca al final
//Sintaxis -> do{}while(condicion);
console.log('\n')

let contador1 =0
let repeticiones1 = 5

do{
    console.log(contador1)
    contador1++
}while (contador1<=repeticiones1)

//CICLO FOR
// Para repetir cuantas veces quereamos un bloque de codigo
// sintaxis -> for (declaracion variables, condicion a evaluar, incremento){}

console.log('CICLO FOR \n')
let repeticiones2 = 5
for(let contador = 0; contador<=repeticiones; contador++ ){
    console.log(contador)
}

//EJERCICIO DE 3 EN 3
//Imprimir los positivos y los negativos de tal forma que no superen al 10
// 1-4-7-10
// 1 -2 -5 -8 
console.log('Ejercicio FOR')
let limite = 10
for(let contador=1; contador<=limite; contador +=3){
    console.log(contador)
}
let limite1=-10
for(let contador=1; contador>=limite1; contador -=3){
    console.log(contador)
}

//EJERCICIO SUMA ACULUMATIVA
//Realizar la suma de los primeros 5 numeros utilizando un ciclo for
console.log('Suma acumulativa')
let resultado=0
for(let contador=0; contador<=5; contador++){
    
    resultado=resultado+contador //resultado += contador
    console.log(resultado)
}

// while
console.log('Suma acumulativa while')
let resultadoW=0
let contadorW = 0
while(contadorW<=5){
    resultadoW= resultadoW+contadorW
    contadorW++
    console.log(resultadoW)
}

console.log('Do while')
//DO WHILE
let resultadoDW=0
let contadorDW =0
do{
    
    //resultado=resultado+contador
    resultadoDW+=contadorDW
    contadorDW++
    console.log(resultadoDW)

}while(contadorDW<=5)
//console.log(resultadoDW)