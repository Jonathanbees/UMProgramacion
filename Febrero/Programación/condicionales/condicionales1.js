var salto = '<br>';
//problema 2
document.write('2. Determinar si un alumno aprueba a reprueba un curso, sabiendo que aprobara si su promedio de tres calificaciones es mayor o igual a 70; reprueba en caso contrario.', salto)

//variables
var nota1 = 50
var nota2 = 80
var nota3 = 50
var promedio = (nota1 + nota2 + nota3)/3

//condicionales
if (promedio >= 70){
    document.write('Has aprobado el curso con un promedio de notas de: ', promedio, salto, salto)
}else{
    document.write('Tu promedio de notas es: ', promedio, ' por lo tanto, no aprobaste el curso', salto,salto)
}

//problema 3

document.write('3. En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $1000 ¿Cuál será la cantidad que pagara una persona por su compra?', salto)

//variables
var valorproducto = 3000
var descuento;
var totpagar;

//constantes
const topeminimo = 1000
const valordescuento = 20

if(valorproducto > topeminimo){
    var descuento = (valorproducto/100)*valordescuento
    var totpagar = valorproducto - descuento
    document.write('El valor total a pagar es: ', totpagar, ' con un descuento aplicado de: ', descuento, salto, salto)
}else{
    var totpagar = valorproducto
    document.write('El valor total a pagar es: ', totpagar, salto, salto)
}

//problema 4
document.write('4. Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera: Si trabaja 40 horas o menos se le paga un salario de $16 por hora, si trabaja más de 40 horas se le paga un salario de $16 por cada una de las primeras 40 horas y un salario de $20 por cada hora extra', salto)
//variables
var salariosemanal;
var cantihoras = 39
//constantes
var valorhora = 16
var valorhoramas = 20
//condiconales

if(cantihoras>40){
    var salario = (40*valorhora) + ((cantihoras-40)*valorhoramas)
    document.write('las horas trabajadas son: ', cantihoras, ' y el salario semanal por ellas es: ', salario, salto, salto)
}else{
    var salariomenos = (cantihoras*valorhora)
    document.write('la cantidad de horas trabajadas es: ', cantihoras, ' y el salario por ellas es: ', salariomenos, salto, salto)
}
//problema 6
document.write('6. Realizar un algoritmo Que lea dos números y los imprima en forma ascendente.', salto)
//variables

var numero1 = 4
var numero2 = 5

//condicionales
if(numero2<numero1){
    document.write('el primer número es: ', numero2, salto, ' y el segundo numero es: ', numero1, salto, salto)
}else{
    document.write('el primer numero es: ', numero1,' y el segundo numero es: ', numero2, salto, salto)
}

//problema 7
document.write('7. Una persona enferma, que pesa 70 kg, se encuentra en reposo y desea saber cuántas calorías consume su cuerpo durante todo el tiempo que realice una misma actividad. Las actividades que tiene permitido realizar son únicamente dormir o estar sentado en reposo. Los datos que tiene son que estando dormido consume 1.08 calorías por minuto y estando sentado en reposo consume 1.66 calorías por minuto.', salto)

//variables
var tiempo;
var calorias;
var dormir = true;
// Constantes
const actdormir = 1.08; // Tiempo dado en minutos
const actreposo = 1.66;

if (!dormir) {
    var tiempo = 10; // Horas
    var calorias = (actdormir*60) * tiempo;
    document.write('Mientras duerme ', tiempo, ' Has perdido un total de ',calorias,' calorias', salto, salto)
} else {
    var tiempo = 10; // Horas
    var calorias = (actreposo*60) * tiempo;
    document.write('Mientras estás sentado ', tiempo, ' horas, has perdido un total de ',calorias,' calorias', salto, salto)
}

//problema 8
document.write('8. Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original y su precio con descuento. El descuento lo hace en base a la clave, si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento en del 20% (solo existen dos claves).', salto)

//variables
var nombreart;
var clave = 2
var precioor;

//constantes
var descuento;

//condicionales
if (clave<=1) {
    var nombreart = 'Huevos'
    var precioor = 3500
    //operaciones
    var descuentos = precioor*0.10
    var preciototal = precioor - descuentos
    //resultado
    document.write('el nombre del producto es: ', nombreart, salto, 'el precio original es: ', precioor,salto, 'con un descuento del 10%, por lo tanto el valor a pagar es: ',preciototal, salto, salto)
}else {
    var nombreart = 'Yogurt'
    var precioor = 2000
    //operaciones
    var descuentos = precioor*0.20
    var preciototal = precioor - descuentos
    //resultado
    document.write('el nombre del producto es: ', nombreart, salto, 'el precio original es: ', precioor,salto, 'con un descuento del 10%, por lo tanto el valor a pagar es: ',preciototal, salto, salto)
}

//problema 9
document.write('9. Hacer un algoritmo que calcule el total a pagar por la compra de camisas. Si se compran tres camisas o más se aplica un descuento del 20% sobre el total de la compra y si son menos de tres camisas un descuento del 10%', salto)

//variables
var camisas = 2
var totalpagar= 140000

//constantes
var descuento;

//condiciones
if(camisas<3){
    //operaciones
    var descuento = totalpagar*0.10
    var totalpagar = totalpagar - descuento
    document.write('las camisas compradas fueron: ', camisas, ' para un descuento del 10%, por lo tanto, el valor a pagar es: ',totalpagar, salto, salto)
    
}else{
    var descuento = totalpagar*0.20
    var totalpagar = totalpagar - descuento
    document.write('las camisas compradas fueron: ', camisas, ' para un descuento del 20%, por lo tanto, el valor a pagar es: ',totalpagar, salto, salto)

}

//problema 10
document.write('10. Una empresa quiere hacer una compra de varias piezas de la misma clase a una fábrica de refacciones. La empresa, dependiendo del monto total de la compra, decidirá qué hacer para pagar al fabricante. Si el monto total de la compra excede de $500 000 la empresa tendrá la capacidad de invertir de su propio dinero un 55% del monto de la compra, pedir prestado al banco un 30% y el resto lo pagará solicitando un crédito al fabricante. Si el monto total de la compra no excede de $500 000 la empresa tendrá capacidad de invertir de su propio dinero un 70% y el restante 30% lo pagará solicitando crédito al fabricante. El fabricante cobra por concepto de intereses un 20% sobre la cantidad que se le pague a crédito.', salto)

var montopagar = 600000
var inversion;
var prestamo;
var crédito;

//constantes
var intereses = 0.20

//condicionales
if(montopagar>500000){
    var inversión = montopagar*0.55
    var prestamo = montopagar*0.30
    var crédito = (montopagar*0.15)*1.20
    var totalpago = inversión+prestamo+crédito
    document.write('el monto a pagar es: ', montopagar, salto, 'con una inversión de: ', inversión, salto, 'un préstamo de: ', prestamo, salto, 'un crédito del fabricante de: ', crédito, salto, 'para un total a pagar de: ', totalpago, salto)
}else{
    var inversión = montopagar*0.70
    var crédito = (montopagar*0.30)*1.20
    var totalpago = inversión+crédito
    document.write('el monto a pagar es: ', montopagar, salto, 'con una inversión de: ', inversión, salto, 'un crédito del fabricante de: ', crédito, salto, 'para un total a pagar de: ', totalpago, salto)
}
