console.log("Aplicacion Calculadora JS")

function sumar(){
    let numero1 = parseInt(document.getElementById("numero1").value)
    let numero2 = parseInt(document.getElementById("numero2").value)
    let resultado = numero1 + numero2
    if(isNaN(resultado)){
        resultado = "Operacion no Valida"
    }
    alert("El resultado de la suma es: "+ resultado)
}
function resta(){
    const formulario = document.getElementById("formulario") // es const porque no se va a reasignar
    let numero1 = formulario["numero1"].value //otra forma de obtener el valor del input
    //el formulario es un array asociativo, es decir que cada elemento se puede obtener por su id
    let numero2 = formulario["numero2"].value //La palabra value convierte el valor a string
    //sino se coloca value, el valor es un objeto HTMLInputElement
    //parseInt convierte el string a entero
    numero1 = parseInt(numero1)
    numero2 = parseInt(numero2)
    let resultado = numero1 - numero2
    if(isNaN(resultado)){
        resultado = "Operacion no Valida"
    }
    document.getElementById("resultado").innerHTML = "Resultado: "+ resultado
}