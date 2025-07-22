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