//USO DE MATRICES
//Una matriz es un arreglo de dos dimensiones
//Sintaxis
//let <nombre_matriz>[[],[]]

//------------------------EJEMPLO-------------------------
let matriz = [[],[]]
matriz[0][0]=100
matriz[0][1]=50
matriz[0][2]=75
matriz[1][0]=25
matriz[1][1]=12
matriz[1][2]=6

//Formas de imprimir una matriz

for(let i=0; i<matriz.length; i++ ){ //para las filas, recorre las filas
    let cadena=""
    
    for(let j=0; j<matriz[i].length; j++){ //recorre los elementos de cada fila 
        cadena += matriz[i][j] + "\t"   //contatena cada valor seguido de la tabulacion
    }
    console.log(cadena)
}

//Usando console.log con formato básico

//recorre e imprime cada fila
for (let fila of matriz){
    console.log(fila.join("\t"))   //unimos los elementos con una tabulacion
} 

//Usando console.table

console.table(matriz)

//Ejemplo
const inventario = [
    // Estante 0 fila 1
    [
        { nombre: "iPhone 15", stock: 10, precio: 999 }, //columna 1
        { nombre: "Samsung S23", stock: 5, precio: 899 },  // columna 2
        { nombre: "Pixel 7", stock: 8, precio: 699 }
    ],
    // Estante 1  fila 2
    [
        { nombre: "MacBook Air", stock: 3, precio: 1099 },
        { nombre: "Dell XPS", stock: 7, precio: 1299 },
        { nombre: "HP Pavilion", stock: 2, precio: 599 }
    ]
];

//Búsqueda de Productos con Stock Crítico (< 5 unidades)
for(let i=0; i<inventario.length; i++){
    for(let j=0; j<inventario[i].length; j++){
        const producto = inventario[i][j]
        if(producto.stock<5){
            console.log(`Alerta de Stock el producto ${producto.nombre} tiene menos de ${producto.stock} unidades`)
        }
    }

}

//Sintaxis simplificada de la matriz
let matriz2 = [[100,200,300],[400,500]]

console.table(matriz2)


//FORMAS DE ACCEDER A LAS DIAGONALES DE UNA MATRIZ ---------------------------------------------------

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let diagonalD =0
    let diagonalI =0
   
    for(let i=0; i<arr.length;i++){
        for(let j=0; j<arr[i].length;j++){
            if(i==j){
                diagonalD += arr[i][j] 
            }
            if(i+j==arr[i].length-1){
                diagonalI += arr[i][j]
            }
        }
    }
    let result = Math.abs(diagonalD-diagonalI)
    return result

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
