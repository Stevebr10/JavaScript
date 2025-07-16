//HOLA MUNDO
console.log("Hola Mundo")
//VARIALES
let miPerro = 10
let miPerro1 = "2"
let miPerro2 = 12
// TYPEOF
console.log(miPerro+miPerro1)
console.log(typeof (miPerro+miPerro1))
//HOISTING -> Se divide en dos conceptos un para declarar y otra para definir o inicializar la varible
//Ademas podemos usar una varible y depsues declararla 
let x    //Declarar la variable
x=10     //Inicializar la variable

console.log(x)

//Constantes en JavaScript
//Una vez definido no se puede cambiar su valor, se define en mayusculas

const MI_CONSTANTE = 1000
// Esto no se puede hacer MI_CONSTANTE = 200

console.log(Math.PI)

//Se tienen que declarar e inicializar sino es un error cuando se usan constantes como lo siguiente
// el cual e sun ejemplo
//const VARIABLE
//VARIABLE="pERRO"

//OPERADORES ARITMETICOS

let a, b, c, d, e, f


a= 3 + 4
console.log(a)

b = 6 -2 
console.log(b)

c= a*2
console.log(c)

d= b/2.5
console.log(d)
console.log(typeof(d))

//modulo
f=9%2   // la respuesta es 1 ya que al dividir 9 para dos el residuo es 1
console.log(f)

//potencia
e = 2**3
console.log(e)

//Incrementos

let w,y,z

w=0
//Preincremento
++w
console.log(w)
//Postincremento
w++
console.log(w)
//predecremento
--a
console.log(a)
//post decremento
a--
console.log(a)

//EJEMPLO
a=5
b=2
c= ++a * b--
console.log(c)

m=5
m++
console.log(m)

m=6
++m
console.log(m)

//El post en caso del incremento o decremento se aplica a la proxima vez que se utiliza la variable
//ejemplo: si tenenmos b=2; b-- (post incremento) la variable va a seguir siendo 2 hasta que en una
// proxima vez se la use

a=6
b=3
r=a*b--
y=a*b--
console.log(r)
console.log(y)