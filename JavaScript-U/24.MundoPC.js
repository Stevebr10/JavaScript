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
        \n\t${this.monitor.toString()}
        \n\t${this.teclado.toString()}
        \n\t${this.raton.toString()}`
    }
}