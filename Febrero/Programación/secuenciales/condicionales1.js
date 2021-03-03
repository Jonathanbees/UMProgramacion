var salto = '<br>';
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
document.write()

