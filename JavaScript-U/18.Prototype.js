//PROTOTYPE JS ----------------------------------------------------------------------------------------
//Un prototype es un objeto del cual otros objetos pueden heredar propiedades y metodos

//Antes de ES6, se usaban funciones constructoras y se añadían métodos al prototipo: --------------

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Definir un método en el prototipo
Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
};

const persona1 = new Persona("Brandon", 23);
persona1.saludar(); // Hola, me llamo Brandon y tengo 23 años

// Aquí, persona1 hereda el método saludar desde Persona.prototype.

//Con class (azúcar sintáctica de ES6) -----------------------------------------------------------------------
// Puedes crear un objeto y establecer su prototipo manualmente:
class Persona2 {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
  }

}

const persona2 = new Persona2("Steve", 25);
persona2.saludar(); // Hola, me llamo Steve y tengo 25 años

//Ejemplo realista

// Imagina que una startup de delivery quiere modelar sus empleados: Conductores y Gerentes.
// Ellos comparten ciertas características (nombre, ID, reportar asistencia), pero cada uno 
// tiene métodos específicos.

// Aquí es donde el prototipo entra para evitar duplicar código.

// Función constructora genérica
function Empleado(nombre, id) {
  this.nombre = nombre;
  this.id = id;
}

// Método compartido (todos los empleados lo heredan)
Empleado.prototype.registrarAsistencia = function() {
  console.log(`${this.nombre} (ID: ${this.id}) registró su asistencia`);
};

// ---- Subtipo: Conductor ----
function Conductor(nombre, id, vehiculo) {
  Empleado.call(this, nombre, id); // Herencia de propiedades
  this.vehiculo = vehiculo;
}

// Herencia de métodos por prototipo
Conductor.prototype = Object.create(Empleado.prototype);
Conductor.prototype.constructor = Conductor;

// Método específico de Conductor
Conductor.prototype.realizarEntrega = function(pedido) {
  console.log(`${this.nombre} entregó el pedido #${pedido} en su ${this.vehiculo}`);
};

// ---- Subtipo: Gerente ----
function Gerente(nombre, id, departamento) {
  Empleado.call(this, nombre, id);
  this.departamento = departamento;
}

// Herencia de métodos por prototipo
Gerente.prototype = Object.create(Empleado.prototype);
Gerente.prototype.constructor = Gerente;

// Método específico de Gerente
Gerente.prototype.asignarRuta = function(conductor, ruta) {
  console.log(`${this.nombre} asignó la ruta ${ruta} al conductor ${conductor.nombre}`);
};

// ---- Uso real ----
const driver1 = new Conductor("Brandon", 101, "Moto");
const manager1 = new Gerente("Steve", 201, "Logística");

driver1.registrarAsistencia();   // Brandon (ID: 101) registró su asistencia
driver1.realizarEntrega(1234);   // Brandon entregó el pedido #1234 en su Moto

manager1.registrarAsistencia();  // Steve (ID: 201) registró su asistencia
manager1.asignarRuta(driver1, "Ruta Norte");
// Steve asignó la ruta Ruta Norte al conductor Brandon

