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