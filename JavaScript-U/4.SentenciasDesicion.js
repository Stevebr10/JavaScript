//Sentencia IF
let miNumero = 10

if(miNumero>0){
    console.log(`Valor Positivo: ${miNumero}`)
}

//Sentencia if else
let miNumero1 = -5

if(miNumero1>0){
    console.log(`Valor Positivo: ${miNumero1}`)
}else{
    console.log(`Valor negativo: ${miNumero1}`)
}

//Sentencia if-else if-else
let miNumero2 = -5

if(miNumero2>0){
    console.log(`Valor Positivo: ${miNumero2}`)
}else if(miNumero2<0){
    console.log(`Valor negativo: ${miNumero2}`)
}else{
    console.log(`Valor es cero: ${miNumero2}`)
}

//Operador ternario
// Es una simplificacion de la sentencia if else
// sintaxis
// (condicion)? caso verdadero: caso falso

(miNumero>0)? console.log(`Positivo ${miNumero}`): console.log(`Negativo ${miNumero}`)

//Algoritmo mayor edad 18

const EDAD_ADULTO = 18
let edadPersonas = 30
//Algoritmo
if(edadPersonas>=EDAD_ADULTO){
    console.log(`Personas con edad ${edadPersonas} es mayor de edad`)
}else{
    console.log(`Persona con edad ${EDAD_ADULTO} es menor de edad`)
}

//EJEMPLO DE DIA DE LA SEMANA IF ELSE
let diaSemana=7

if(diaSemana==1){
    console.log(`Lunes`)
}else if ( diaSemana==2)
    console.log(`Martes`)
else if (diaSemana==3)
    console.log(`Miercoles`)
else if (diaSemana==4)
    console.log(`Jueves`)
else if (diaSemana==5)
    console.log(`Viernes`)
else if (diaSemana==6)
    console.log(`Sabado`)
else if (diaSemana==7)
    console.log(`Domingo`)

for(let i=0; i<=7; i++ ){
    if(i==1) console.log(`Lunes`)
    else if (i==2) console.log(`Martes`)
    else if (i==3) console.log(`Miercoles`)
    else if (i==4) console.log(`Jueves`)
    else if (i==5) console.log(`Viernes`)
    else if (i==6) console.log(`Sabado`)
    else if (i==7) console.log(`Domingo`)
}

//SENTENCIA SWITCH
let diaSemanaW = 5
switch(diaSemanaW){
    case 1:
        console.log(`Lunes`)
        break
    case 2:
        console.log(`Martes`)
        break
    case 3:
        console.log(`Miercoles`)
        break
    case 4:
        console.log(`Jueves`)
        break
    case 5:
        console.log(`Viernes`)
        break
    case 6:
        console.log(`sabado`)
        break
    case 7:
        console.log(`Domingo`)
        break
    default:
        console.log(`Error del dia de la semana, ingresado ${diaSemanaW}`)
}