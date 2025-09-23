const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta coche', 1500.00)

]
const egresos = [
    new Egreso('Renta departamento', 900.00),
    new Egreso('Ropa', 400.00)
]

let cargarApp = () => {  // Funcion que se ejecuta al iniciar la pagina el cual llama a otras funciones
    cargarCabecero()
    cargarIngresos()

}

let totalIngresos = () => { // Funcion que calcula el total de ingresos
    let totalIngreso = 0
    for ( let ingreso of ingresos){
        totalIngreso += ingreso.getValor //No se ocupa el parentesis porque es un metodo get 
    }
    return totalIngreso
}
 let totalEgresos = () => { // Funcion que calcula el total de egresos
    let totalEgreso = 0
    for( let egreso of egresos){
        totalEgreso += egreso.getValor //Si se ocupa el parentesis entonces es un metodo normal 
    }
    return totalEgreso
 }

let cargarCabecero = () => { // Funcion que carga el cabecero de la pagina con los datos del presupuesto
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentajeEgreso = totalEgresos() / totalIngresos()
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto)
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso)
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos())
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos())
}

const formatoMoneda = (valor) => { // Funcion que da formato de moneda a los valores
    //toLocaleString es un metodo de los numeros que da forma a los numeros
    //El primer parametro es el idioma y el segundo un objeto con las opciones de formato
    // style: 'currency' indica que es una moneda
    //currency: 'USD' indica que es dolares
    //minimumFractionDigits: 2 indica que siempre muestre 2 decimales
    return valor.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2})

}
const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString('en-US', {style: 'percent', minimumFractionDigits: 2})
}

const cargarIngresos = () => {
    let ingresosHTML = ''  // Variable para almacenar el HTML de los ingresos
    for(let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso)
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML
}
const crearIngresoHTML = (ingreso) => { // Funcion que crea el HTML de un ingreso
    let ingresoHTML = `
     <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.getDescripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(ingreso.getValor)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>`
    return ingresoHTML
}

