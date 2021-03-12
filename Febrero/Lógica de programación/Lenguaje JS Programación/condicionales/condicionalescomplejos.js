var salto = '<br>';
//problema 1
document.write('1. Leer 2 números; si son iguales que los multiplique, si el primero es mayor que el segundo que los reste y si no que los sume.', salto)

//variables
var num1 = 7
var num2 = 8
var resultado;

//condicionales
if(num1 === num2){
    resultado = num1*num2
}
if(num1>num2){
    resultado = num1-num2
}
if(num2>num1){
    resultado = num2+num1
}
document.write('Los numeros ingresados son: ', num1, ' y ', num2, salto, 'el resultado de la operación es: ', resultado, salto, salto)

//problema 2 
document.write('2. Leer tres números diferentes e imprimir el número mayor de los tres.', salto)

//variables
var nume1 = 10
var nume2 = 11
var nume3 = 13
var result;

//condicionales
if (nume1>nume2 & nume1>nume3){
    result = 'el número mayor es: '+ nume1+ salto
}
if (nume2>nume1 & nume2>nume3){
    result = 'el número mayor es: '+ nume2+ salto
}
if (nume3>nume1 & nume3>nume2){
    result = 'el número mayor es: '+ nume3+ salto
}
document.write('los numeros ingresados son: '+ nume1+ ','+ nume2, ','+ nume3+ salto+result+salto)

//problema 3
document.write('3. Determinar la cantidad de dinero que recibirá un trabajador por concepto de las horas extras trabajadas en una empresa, sabiendo que cuando las horas de trabajo exceden de 40, el resto se consideran horas extras y que estas se pagan al doble de una hora normal cuando no exceden de 8; si las horas extras exceden de 8 se pagan las primeras 8 al doble de lo que se pagan las horas normales y el resto al triple.'+salto)
//variables
var horastrabaja = prompt('Escriba las horas trabajadas','');
var resultadohoras;
var horasextra = horastrabaja-40
var valorhora = 15000
var totalhoras;
var horasdoble = 8
var pagohextra = (horasdoble)*2*valorhora
var pagohextra3 = ((horastrabaja-48)*3*valorhora)
//constantes
const limitehoras = 40

//condicionales
if(horastrabaja <= limitehoras){
    resultadohoras = horastrabaja
    totalhoras = limitehoras*valorhora
}
if((horastrabaja > limitehoras) & horasextra <= 8){
    resultadohoras = ('las horas trabajadas son: '+ horastrabaja+ ' Y las horas extra son: '+ horasextra+ ' con un pago del doble de las horas normales')
    totalhoras = (limitehoras*valorhora)+ (pagohextra)
}
if(horastrabaja > limitehoras & horasextra > 8) {
    resultadohoras = ('las horas trabajadas son: '+ horastrabaja+ ' Y las horas extra son: '+ horasextra+ ' con un pago del doble de las horas normales'+ salto+ 'las horas con valor triplicado son: '+ pagohextra3)
    totalhoras = ((limitehoras*valorhora)+ (pagohextra)+ pagohextra3)
}
document.write('los resultados son: '+ resultadohoras+ salto+ 'el valor total a pagar es: '+ totalhoras+ salto+salto)

//problema 4
document.write('4. Calcular la utilidad que un trabajador recibe en el reparto anual de utilidades si este se le asigna como un porcentaje de su salario mensual que depende de su antigüedad en la empresa de acuerdo con la siguiente tabla:', salto)
//variables
var salario = 984000
var utilidad;
var meses = 62
var años = (meses/12)
var años = Math.floor(años)
//condicionales
if(meses < 12){
    utilidad = salario*0.05
}
if(meses >= 12 & meses < 24){
    utilidad = salario*0.07
}
if(meses >= 24 & meses < 60){
    utilidad = salario*0.10
}
if(meses >= 60 & meses < 120){
    utilidad = salario*0.15
}
if(meses >= 120){
    utilidad = salario*0.20
}
document.write('el salario del empleado es: ', salario, salto, 'Los años en la empresa son: ', años, salto, 'La utilidad recibida por lo años transcurridos son: ', utilidad, salto, salto)

//problema 5
document.write('5. En una tienda de descuento se efectúa una promoción en la cual se hace un descuento sobre el valor de la compra total según el color de la bolita que el cliente saque al pagar en caja. Si la bolita es de color blanco no se le hará descuento alguno, si es verde se le hará un 10% de descuento, si es amarilla un 25%, si es azul un 50% y si es roja un 100%. Determinar la cantidad final que el cliente deberá pagar por su compra se sabe que solo hay bolitas de los colores mencionados.', salto)

//variables

var valorcompra = 100000
var bolas = 'amarilla'
var descuento;

//condicionales
if(bolas === 'blanca'){
    descuento = 0
    valorpagar = valorcompra-descuento
}
if(bolas === 'verde'){
    descuento = valorcompra*0.10
    valorpagar = valorcompra-descuento
}
if(bolas === 'amarilla'){
    descuento = valorcompra*0.25
    valorpagar = valorcompra-descuento
}
if(bolas === 'azul'){
    descuento = valorcompra*0.50
    valorpagar = valorcompra-descuento
}
if(bolas === 'roja'){
    descuento = valorcompra*1
    valorpagar = valorcompra-descuento
}
document.write('el valor de la compra es: ', valorcompra, salto, 'la bola sacada es: ', bolas, ', por lo tanto, tiene un descuento de: ', descuento, ' para un total a pagar de: ', valorpagar, salto, salto)

//problema 6
document.write('6. El IMSS requiere clasificar a las personas que se jubilaran en el año de 1997. Existen tres tipos de jubilaciones: por edad, por antigüedad joven y por antigüedad adulta. Las personas adscritas a la jubilación por edad deben tener 60 años o más y una antigüedad en su empleo de menos de 25 años. Las personas adscritas a la jubilación por antigüedad joven deben tener menos de 60 años y una antigüedad en su empleo de 25 años o más. Las personas adscritas a la jubilación por antigüedad adulta deben tener 60 años o más y una antigüedad en su empleo de 25 años o más. Determinar en qué tipo de jubilación, quedara adscrita una persona.', salto)

//variables
var antiguempresa = 26
var años = 62
var jubilación;

//condicionales
if(años >= 60 & antiguempresa<25){
    jubilación = ('El tipo de jubilación alcanzada es: la jubilación por edad')
}
if(años < 60 & antiguempresa>=25){
    jubilación = ('El tipo de jubilación alcanzada es: la jubilación por antiguedad joven')
}
if(años >= 60 & antiguempresa>=25){
    jubilación = ('El tipo de jubilación alcanzada es: la jubilación por antiguedad adulta')
}
document.write(jubilación)
