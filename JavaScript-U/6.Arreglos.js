//ARREGLOS
//Uni arreglo nos permite alamacenar multiples variables en una sola variable,
//en lugar de feinir varias variables
//Sintaxis
//<nombre del arreglo>=[];

//Modificacion de Arreglos
//let numeroArreglo=[];
//modificamos un indice del arreglo en este caso colocamos un valor en un determinado indice
// numeroArreglo[0]=10    el valor 10 se almacena en la posicion 0 del arreglo

//los de mos valores que no han sido inicializados tienen por defecto el valor undefined

//LEER los valores del arreglo
//consolo.log(numeroArreglo[0]); -> 10

//-------------------EJEMPLO-------------------------
let numerosArreglo=[];
numerosArreglo[0]=4
numerosArreglo[1]=5
numerosArreglo[2]=6
numerosArreglo[4]='hola'

console.log(`Elemento 1 -> indice cero = ${numerosArreglo[0]}`)
console.log(`Elemento 5 -> indice 4 = ${numerosArreglo[4]}`)

//NOTA: No hace falta especificar la dimension del arreglo
//Los arreglos en javascript se crean de manera dinamica segun los valores ingresados
let numeroArreglo1 =[0,5,6,7,8,9]
console.log(`Elemento 1 -> indice 0 = ${numeroArreglo1[0]}`)
console.log(`Elemento 4 -> indice 3 = ${numeroArreglo1[3]}`)
console.log(`Elemento 6 -> indice 5 = ${numeroArreglo1[5]}`)

//Iterar arreglos en javascript
let numeroArreglo2 = [13, 21, 0, 0, 62]
//leer los valores
for(let i=0; i<numeroArreglo2.length; i++){
    console.log(`${numeroArreglo2[i]}`)
}


