const mostrarReloj = () => {
    let fecha = new Date()
    let hora = formatoHora(fecha.getHours())
    let minutos = formatoHora(fecha.getMinutes())
    let segundos = formatoHora(fecha.getSeconds())
    document.getElementById('hora').innerHTML =
        `${hora}:${minutos}:${segundos}`
    
    const meses = ['Ene', 'Feb', 'Mar', 'Abril', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
    let diaSemana = dias[fecha.getDay()] //getDay() devuelve el día de la semana 0-6
    let dia = fecha.getDate() //getDate() devuelve el dia del mes 1-31
    let mes =meses[fecha.getMonth()] //getMonth() devuelve el mes 0-11
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`
    document.getElementById('fecha').innerHTML = fechaTexto
    
}

const formatoHora = (hora) => {
    if (hora < 10)
        hora = "0" +hora
    return hora
}

setInterval(mostrarReloj, 1000)