//PROYECTO SISTEMA DE VENTAS



class Producto {
    static contadorProductos = 0
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
        this.idProducto = ++Producto.contadorProductos
    }
    get id_Producto(){
        return this.idProducto
    }
    get getNombre(){
        return this.nombre
    }
    get getPrecio(){
        return this.precio
    }
    set setNombre(nombre){
        return this.nombre = nombre
    }
    set setPrecio(precio){
        return this.precio = precio
    }
    toString(){
        return `IdProducto: ${this.idProducto}, Nombre: ${this.nombre}, Precio: ${this.precio}`
    }

}
let producto1 = new Producto('Pantalon', 200)
console.log(producto1.toString())
let producto2 = new Producto('Camisa', 150)
console.log(producto2.toString())

class Orden {
     static contadorOrdenes = 0

     static get MAX_PRODUCTOS(){
        return 5
     }
    
     constructor(){
        this.idOrden = ++Orden.contadorOrdenes
        this.productos = []
        this.contadorProductosAgregados = 0
     }
     get id_Orden(){
        return this.idOrden
     }
     agregarProducto(producto){
        if(this.contadorProductosAgregados < Orden.MAX_PRODUCTOS){ //podiramos usar this.productos.length 
            this.productos.push(producto)
            this.contadorProductosAgregados++
            //esta es otra forma de agregar productos
            //this.productos[this.contadorProductosAgregados++] = producto
        }else{
            console.log('No se pueden agregar mas productos')
        }
     }
     calcularTotal(){
        let totalVentas = 0
        for(let producto of this.productos){
            totalVentas += producto.precio
        }
        return totalVentas
     }
     mostrarOrden(){
        let productosOrden = ''
        for(let producto of this.productos){
            productosOrden += '\n{ ' +producto.toString() + ' }'
        }
        console.log(`Orden : ${this.idOrden}, Total: ${this.calcularTotal()}, Productos: ${productosOrden}`)
     }

}
let orden1 = new Orden()
orden1.agregarProducto(producto1)
orden1.agregarProducto(producto2)
orden1.mostrarOrden()

let orden2 = new Orden()
let producto3 = new Producto('Zapatos', 300)
orden2.agregarProducto(producto3)
orden2.mostrarOrden()
