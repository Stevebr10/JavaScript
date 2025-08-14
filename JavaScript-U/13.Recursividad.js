//Funcion Recursiva: Aquella que se llama a si misma
//Existen dos reglas:
//1. Una funcion recursiva se debe llamar a si misma
//2. Debe avanzar hacia un caso base, de lo contrario se producira un bucle infinito
// es decir, debe haber una condicion que detenga la recursion

//Ejemplo

function funcionRecursiva (numero){
    //Caso Base 
    if (numero ==1){
        console.log("Caso base alcanzado: "+ numero)
    }else{
        console.log(numero)
        funcionRecursiva(numero -1)  
    }
}

funcionRecursiva(5)