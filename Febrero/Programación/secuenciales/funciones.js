// Constantes del formato:
var salto = '<br>';

// Problema a resolver:
var problema1 = '1. Haga un algoritmo que calcule e imprima el área de un circulo =>Área = π r 2';
document.write(problema1,salto);

// Variables a ingresar: 
var radio = 20; // Variable

// Constantes:
var pi = 3.1416;  

// Operaciones:
var area = (pi*(radio*radio));

// Resultado : 
document.write('Área = ',area, salto, salto);

// ---------------------------------------------------------------------------------------------------

var problema2 = '2. Haga un algoritmo que calcule e imprima el área de un triángulo => Área =(b*h) / 2';
document.write(problema2,salto);

//variables
var base = 3;
var altura = 3;

//constantes
var operacion = 2;

//operación
var area = (base*altura)/2

//resultado
document.write('Área = ', area, salto, salto)

var problema3 = '3. Diseñar un algoritmo a través del cual se pueda calcular la siguiente expresión: z= ((y1-y2)/(x1-x2))'
 document.write(problema3, salto);

//variables
var y1 = 10;
var y2 = 3;
var x1 = 10;
var x2 = 6;

//operación
var z=(y1-y2/x1-x2);

//resultado
document.write('Z= ', z, salto, salto)

var problema4 = '4. Diseñe un algoritmo para la conversión de una medida de metros a pies y pulgadas, donde se sabe que 1 metro es igual a 3.28 pies y 1 pie es igual a 12 pulgadas'
document.write(problema4, salto);

//variables
var metros = 3

var pies ; 
var pulgadas ; 

//operaciones
var pies = metros*3.28
var pulgadas = pies*12

//resultado
document.write(metros, ' metros', salto, pies,' pies', salto, pulgadas, '   pulgadas',salto, salto);

var problema5 = '5. Elabore un algoritmo que convierta una temperatura dada en centígrados a fahrenheit. Tener en cuenta la siguiente fórmula: ºF= 9/5 ºC + 32'
document.write(problema5, salto,)

//variables
var C = 32
var F

//operaciones
var F=(((9/5)*C)+32)

//resultado
document.write('Los grados centígrados son ', C, ' y los grados farenheit son ', F, salto, salto)

var problema6 = '6. Hacer un algoritmo para calcular el IVA de un valor digitado por el teclado, mostrar este resultado y el de sumar el IVA al valor digitado.'
document.write(problema6, salto,)

//variables
var valor = 3000

//constantes
var IVA = 0.19

//operaciones

var valorproducto = (valor*IVA)+ valor

//resultados
document.write('el valor ingresado es ', valor, ' y el valor del producto con el IVA es ', valorproducto, salto, salto)

var problema7 = '7.Elabore un algoritmo para mostrar la cantidad de miles, centenas, decenas y unidades de un número entero digitado por teclado, ejemplo: sea Sea 1483 el número digitado el algoritmo debe mostrar en pantalla, Miles = 1 ; Centenas = 4 ; Decenas = 8 y Unidades = 3'
document.write(problema7, salto, salto)

//variables
var cifra = 4535
var miles
var centenas
var decenas
var unidades

//operaciones
var miles = cifra/1000
var miles = Math.floor(miles)
var centenas = cifra/100
var centenas = Math.floor(centenas)
var centenas = centenas - (miles*10)
var decenas = cifra/10
var decenas = Math.floor(decenas)
var decenas = decenas - ((miles*100)+centenas*10)
var unidades = cifra - ((miles*1000)+(centenas*100)+(decenas*10))

//resultados
document.write(cifra,salto, 'los miles son ', miles, salto,'las centenas son ', centenas, salto, 'las decenas son ', decenas, salto,'las unidades son ', unidades, salto, salto)

var problema8 = '8. Elaborar un algoritmo que permita leer el nombre de un empleado, el número de horas extras diurnas, horas extras nocturnas y el valor básico hora. Se debe calcular el valor a pagar en una quincena teniendo en cuenta que el recargo de la hora extra diurna es del 25% y el de la nocturna es del 75%'
document.write(problema8, salto)

//variables
var Nombre
var horasextrasdiurnas = 4
var horasextrasnocturnas = 5
var valorhora = 20000
var quincena

//constantes
var recargohoraextradiurnas = (valorhora*1.25)
var recargohoraextranocturna = (valorhora*1.75)
var mes = (valorhora*30)/2

//operaciones

var quincena = ((mes + (horasextrasdiurnas*recargohoraextradiurnas)+ (horasextrasnocturnas*recargohoraextranocturna)))

//resultado
document.write('el nombre es Jonathan Betancur', salto, 'las horas extras diurnas son ', horasextrasdiurnas, salto, 'las horas extras nocturnas son ', horasextrasnocturnas, salto, 'el valor quincenal es ', quincena, salto, salto)

var problema9 = '9. Elaborar un algoritmo que lea el nombre de un producto, el valor unitario, el saldo inicial al comienzo del mes, las entradas y las salidas durante el mes. Se debe calcular el saldo final del mes y el valor de dicha mercancía'
document.write(problema9, salto, salto)

//variables
var arepas = 40   //disponibilidad inicial
var valorunitario = 2000
var entradas = 100
var salidas = 50

//constantes
var disponibilidadfinal= entradas - salidas

//operación
var valormercancía = (arepas + disponibilidadfinal) * valorunitario

//resultado
document.write('La disponibilidad inicial es ', arepas, salto, 'el valor de las arepas es ', valorunitario, salto, 'las entradas de arepas son ', entradas, salto, 'las salidas son ', salidas, salto, 'el valor de la mercancía final es ', valormercancía, salto, salto)

var problema10 = '10. Elaborar un algoritmo que permita leer el nombre y valor de venta de 3 productos de una tienda de insumos agrícolas. Sobre el 1er producto se hace un descuento del 2.5%, sobre el 2º un descuento del 1.8% y sobre el 3ro el 1.3%. Se debe calcular el valor final que debe de pagar el cliente por la mercancía comprada'
document.write(problema10, salto,salto)

//variables
var nombre1 = 'bolsa de maíz'
var nombre2 = 'pala'
var nombre3 = 'bolsa de zanahoria'
var valor1 = 4000
var valor2 = 15000
var valor3 = 3000

//constantes
var costo1 = 2.5
var costo2 = 1.8
var costo3 = 1.3

//operaciones
var producto1 = valor1 - (valor1 * 0.025)
var producto2 = valor2 - (valor2 * 0.018)
var producto3 = valor3 - (valor3 * 0.013)

//resultado

document.write('los productos son: ', salto, nombre1, ',', nombre2, ',', nombre3, salto, 'los valores son: ', valor1, '=bolsa de maíz, ', valor2, '=pala, ', valor3, '=bolsa de zanahorias', salto, 'los valores con el descuento son: ',salto, producto1, '=bolsa de maíz', salto, producto2, '=pala', salto, producto3, '=bolsa de zanahorias', salto, salto)

var problema11 = '11. En la prueba final de atletismo de los 50 metros planos en los juegos olímpicos, se obtuvo el tiempo utilizado por cada uno de los 8 atletas participantes. Se debe imprimir la velocidad promedio (Metros/Segundos) en que los atletas corrieron.'
document.write(problema11, salto, salto)

//variables
var tiempop1 = 6
var tiempop2 = 7
var tiempop3 = 8
var tiempop4 = 9
var tiempop5 = 10
var tiempop6 = 11
var tiempop7 = 12
var tiempop8 = 13

//constantes
var metros = 50

//operaciones

var v1p = 50/tiempop1
var v2p = 50/tiempop2
var v3p = 50/tiempop3
var v4p = 50/tiempop4
var v5p = 50/tiempop5
var v6p = 50/tiempop6
var v7p = 50/tiempop7
var v8p = 50/tiempop8

var velocidadpromedio = (v1p+v2p+v3p+v4p+v5p+v6p+v7p+v8p)/8

//resultado

document.write('la velocidad promedio es: ', velocidadpromedio, salto, salto)

var problema12 = ('12. Elaborar un algoritmo que permita intercambiar el valor de dos variables. Ejemplo: Si la variable A=5 y la B=8, luego del proceso debe quedar así: A=8 y B=5.')
document.write(problema12, salto)

//variables

var número1 = 5
var número2 = 4
var auxiliar

//operaciones

var auxiliar = número1
var número1 = número2
var número2 = auxiliar

//resultado

document.write('inicialmente, el número 1 era: ', número2,' y el número 2 era ', número1, ' ahora,',salto, 'el auxiliar es: ', auxiliar, salto, 'el número 1 es: ', número1, salto,  'el número 2 es: ', número2, salto, salto)

var problema13 = '13. Se debe leer una cantidad de 6 dígitos que debe ser múltiplo de 1.000 y que representa el valor que va a retirar una persona de un cajero electrónico. Se debe de imprimir cuantos billetes de 50.000, 20.000, 10.000, 5.000, 2.000 y 1.000 debe entregar dicha máquina. Ejemplo: Se desea retirar 238.000. El cajero debería entregar 4 billetes de 50.000, 1 billete de 20.000, 1 billete de 10.000, 1 billete de 5.000, 1 billete de 2.000 y 1 billete de 1.000.'
document.write(problema13, salto)

//variables
var cifra = 488000

//operaciones
var bille50 = cifra/50000
var bille50 = Math.floor(bille50)
var bille20 = (cifra-(bille50*50000))
var bille20 = Math.floor(bille20/20000)
var bille10 = cifra - (bille50*50000)-(bille20*20000)
var bille10 = Math.floor(bille10/10000)
var bille5 = cifra-(bille50*50000)-(bille20*20000)-(bille10*10000)
var bille5 = Math.floor(bille5/5000)
var bille2 = cifra-(bille50*50000)-(bille20*20000)-(bille10*10000)-(bille5*5000)
var bille2 = Math.floor(bille2/2000)
var bille1 = cifra-(bille50*50000)-(bille20*20000)-(bille10*10000)-(bille5*5000)-(bille2*2000)
var bille1 = Math.floor(bille1/1000)
//resultado
document.write('La cifra es: ', cifra, salto, 'los billetes de 50000 a entregar son: ', bille50, salto, 'los billetes de 20000 a entregar son: ', bille20, salto, 'los billetes de 10000 a entregar son: ', bille10, salto, 'los billetes de 5000 a entregar son: ', bille5, salto, 'los billetes de 2000 a entregar son: ', bille2, salto, 'los billetes de 1000 a entregar son: ', bille1, salto, salto)

var problema14 = '14. Se conoce el tiempo en minutos y segundos utilizados por un vehículo de Fórmula 1 para dar una vuelta al circuito de Valencia España que tiene una longitud de 5.830 metros. Se debe de imprimir la velocidad promedio (Km/Hora) a la que el vehículo anduvo en la pista.'
document.write(problema14, salto, salto)

//variables
var tiempominutos = 10

//constantes
var metros = 5830
var kilómetros
var horas

//operaciones

var kilómetroshora = (5830/10)*(60/1000)

//resultado
document.write('el tiempo en minutos es: ', tiempominutos, ' en ', metros, ' metros,', ' la velocidad en kilómetros por hora es: ', kilómetroshora, salto, salto)

var problema15 = '15. Se hizo una prueba en un edificio de 40 pisos para determinar la velocidad a la que cae un martillo desde su parte más alta. Se sabe que cada piso del edificio mide 3.5 metros de altura. Si se conoce el tiempo que tardó el martillo en caer, se debe imprimir la velocidad promedio (Metros/Segundo) que alcanzó el martillo en su caída libre.'
document.write(problema15, salto)

//variables
var tiempocaída = 5

//constantes
var altura = 3.5*40
var gravedad = 9.8

//operaciones
var velocidad = gravedad*tiempocaída

//resultado

document.write('el tiempo de caída es: ', tiempocaída, ' la velocidad en metros por segundo: ', velocidad,salto)