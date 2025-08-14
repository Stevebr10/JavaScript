//Funciones Incorporadas JS

//Obtener el largo de una cadena
let cadena1 = "Hola Mundo"
cadena1.length
console.log(cadena1.length) // 10

//No podemos modificar una cadena en JS, ya que son inmutables
cadena1[0]="X"
console.log(cadena1[0]) // "H"
console.log(cadena1) // "Hola Mundo"

//Si podemos asignar una nueva cadena
cadena1 = "Hola X"
console.log(cadena1) // "Hola X"

//Recorrer cada uno de los caracteres de la cadena

for(let i=0; i<cadena1.length; i++){
    console.log(cadena1[i])
}

// Recorrer cada uno de los caracteres de la cadena e impimir en la misma linea

for(let i=0; i<cadena1.length; i++){
    process.stdout.write(cadena1[i]+" ")
}
console.log() // Salto de linea

//Recorrer cada uno de los caracteres de la cadena e imprimir sin un for
console.log(cadena1.split('').join(' '))

//SUBCADENAS EN JS --------------------------------------------------------------------------------
//Se obtienen con el método substring(inicio, fin) 
//El indice inicio es inclusivo y el indice fin es exclusivo
let cadena2 = "Hola Mundo"
console.log(cadena2.substring(0, 3)) // "Hol"
console.log(cadena2.substring(5, 9)) // "Mund"
console.log(cadena2.substring(0, 5)) // "Hola "
console.log(cadena2.substring(5, 10)) // "Mundo"

//CONCATENACION DE CADENAS ----------------------------------------------------------------------------
//Unir dos o mas cadenas en una sola
console.log()
console.log("CONCATENACION DE CADENAS")
let cadena3 = "Hola"
let cadena4 = "Mundo"
let cadena5 = cadena3 + " " + cadena4
console.log(cadena5) // "Hola Mundo"

//Podemos usar el stringInterpolation
console.log(`${cadena3} ${cadena4}`)

//CONVERTIR UNA CADENA A NUMERO -----------------------------------------------------------------------
let a = "10"
let b = "5"
console.log(a + b) // "105"
console.log(Number(a) + Number(b)) // 15
console.log(parseInt(a)+parseInt(b))
console.log(parseInt(a+b))

//CONVERTIR DE NUMERO A CADENA -----------------------------------------------------------------------
let c = 10
let d = 5
console.log(c + d) // 15
console.log(c.toString() + d.toString()) // "105"
console.log(String(c) + String(d)) // "105"

//VALOR ABSOLUTO ----------------------------------------------------------------------------------------
let e = -10
let f = 5
console.log(Math.abs(e))
console.log(Math.abs(f))

//REDONDEO Y TRUNCADO EN JS -------------------------------------------------------------------------
let numero=10.5, redondeo, truncado

//Redondeo -> Math.round() -> redondea el valor entero mas cercano, 0.5 o superior, redondea al valor 
//superior entero mas cercano
redondeo = Math.round(numero)
console.log(redondeo)

//Truncado -> Math.trunc() -> Elimina la parte flotante (parte decimal)
truncado = Math.trunc(numero)
console.log(truncado)