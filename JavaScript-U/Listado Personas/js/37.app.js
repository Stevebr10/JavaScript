console.log("Aplicacion Listado de Personas")


const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara'),
    new Persona('Carlos', 'Ramirez')
]

function mostrarPersonas(){
    console.log("Mostrando Personas...")
    let texto = ""
    for(let persona of personas){
        //texto += `Nombre: ${persona.getNombre}, Apellido: ${persona.getApellido}\n`
        console.log(persona)
        texto += `<li>${persona.getNombre} ${persona.getApellido}</li>`
    }
    //console.log(texto)
    document.getElementById("personas").innerHTML = texto
}

function agregarPersona(){
    console.log("Agregando Persona...")
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    if(nombre !== "" && apellido !==""){
        const persona = new Persona(nombre, apellido)
        personas.push(persona)
        mostrarPersonas()
    }
}

function agregarPersona1(){
    const formulario = document.getElementById("formulario")
    const nombre = formulario["nombre"].value
    const apellido = formulario["apellido"].value
    if(nombre !== "" && apellido !== ""){
        const persona = new Persona(nombre, apellido)
        personas.push(persona)
        mostrarPersonas()
    }else{
        alert("Debe ingresar un nombre y un apellido")
    }
}