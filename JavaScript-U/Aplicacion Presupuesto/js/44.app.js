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
    document.getElementById('presupuesto').innerHTML = presupuesto
    document.getElementById('porcentaje').innerHTML = porcentajeEgreso
    document.getElementById('ingresos').innerHTML = totalIngresos()
    document.getElementById('egresos').innerHTML = totalEgresos()
}