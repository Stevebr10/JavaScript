//PROYECTO MUNDO PC

class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this.tipoEntrada = tipoEntrada
        this.marca = marca
    }
    get getTipoEntrada() {
        return this.tipoEntrada
    }
    get getMarca(){
        return this.marca
    }
    set seTipoEntrada(tipoEntrada){
        return this.tipoEntrada = tipoEntrada
    }
    set setMarca(marca) {
        return this.marca = marca
    }
    toString(){
        return `Tipo Entrada: ${this.tipoEntrada}, Marca: ${this.marca}`
    }
}

class Raton extends DispositivoEntrada {

    static contadorRatones = 0
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this.idRaton = ++Raton.contadorRatones
    }
    get id_Raton(){
        return this.idRaton
    }
    toString(){
        return `ID Raton: ${this.idRaton}, ${super.toString()}`
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this.idTeclado = ++Teclado.contadorTeclados
    }
    get id_Teclado(){
        return this.idTeclado
    }
    toString(){
        return `ID Teclado: ${this.idTeclado}, ${super.toString()}`
    }
}

class Monitor {
    static contadorMonitores = 0
    constructor(marca, tamanio){
        this.marca = marca
        this.tamanio = tamanio
        this.idMonitor = ++Monitor.contadorMonitores
    }
    get id_Monitor(){
        return this.idMonitor
    }
    get getMarca(){
        return this.marca
    }
    get getTamanio(){
        return this.tamanio
    }
    set setMarca(marca){
        return this.marca = marca
    }
    set setTamanio(tamanio){
        return this.tamanio = tamanio
    }
    toString(){
        return `ID Monitor: ${this.idMonitor}, Marca: ${this.marca}, Tamaño: ${this.tamanio}`
    }
}

class Computadora {
    static contadorComputadoras = 0
    constructor(nombre, monitor, teclado, raton){
        this.nombre = nombre
        this.monitor = monitor
        this.teclado = teclado
        this.raton = raton
        this.idComputadora = ++Computadora.contadorComputadoras
    }
    get Id_Computadora(){
        return this.idComputadora
    }
    get getNombre(){
        return this.nombre
    }
    get getMonitor(){
        return this.monitor
    }
    get getTeclado(){
        return this.teclado
    }
    get getRaton(){
        return this.raton
    }
    set setNombre(nombre){
        return this.nombre = nombre
    }
    set setMonitor(monitor){
        return this.monitor = monitor
    }
    set setTeclado(teclado){
        return this.teclado = teclado
    }
    set setRaton(raton){
        return this.raton = raton
    }
    toString(){
        return `ID Computadora: ${this.idComputadora}, Nombre: ${this.nombre} 
        ${this.monitor.toString()} 
        ${this.teclado.toString()}
        ${this.raton.toString()}`
    }
}

class Orden {
    static contadorOrdenes = 0
    
    constructor(){
        this.idOrden = ++Orden.contadorOrdenes
        this.computadoras = []
    }
    get id_Orden(){
        return this.idOrden
    }
    agregarComputadora(computador){
        this.computadoras.push(computador)
    }
    mostrarOrden(){
        let computadoraOrden = ''
        for(let computadora of this.computadoras){
            computadoraOrden += '\n'+computadora.toString()
        }
        console.log(`Orden: ${this,this.idOrden}, Computadoras: ${computadoraOrden}`)
    }
}

//Pruebas
let raton1 = new Raton('USB', 'HP')
console.log(raton1.toString())
let raton2 = new Raton('Bluetooth', 'Dell')
console.log(raton2.toString())
let teclado1 = new Teclado('USB', 'Genius')
console.log(teclado1.toString())
let teclado2 = new Teclado('Bluetooth', 'Apple')
console.log(teclado2.toString())
let monitor1 = new Monitor('Samsung', 15)
console.log(monitor1.toString())
let monitor2 = new Monitor('LG', 20)
console.log(monitor2.toString())
let computadora1 = new Computadora('HP', monitor1, teclado1, raton1)
console.log(computadora1.toString())
let computadora2 = new Computadora('Gamer', monitor2, teclado2, raton2)
console.log(computadora2.toString())
let orden1 = new Orden()
orden1.agregarComputadora(computadora1)
orden1.agregarComputadora(computadora2)
orden1.mostrarOrden()

