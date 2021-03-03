// Constantes del formato:
var salto = '<br>';

//problema vacunas:
document.write('1.problema vacunas: <br>')
//constantes
const cdiez = 10;
const cocho = 8;


//variables
var peso = 5
var meses = 12;
var dosis;

//operaciones
var dosis = ((peso + cdiez)/(10*meses)) + cocho
var dosis = Math.floor(dosis)

//resultado
document.write('la dosis del bebé es: ', dosis, ' ml <br><br>')

//problema salario
document.write('2.problema salario: <br>')


//variables
var hora = 12000
var horatraba = 48
var retención;
var salaneto;
//constante
var porretencion = 12.5

//operaciones
var salabruto= (horatraba*hora)
var retención= ((salabruto/100) * porretencion)
var salaneto = (salabruto-retención)

//resultado
document.write('el salario bruto es: ',salabruto,' y la retención del salario es: ', retención, ' por lo tanto, el salario neto es: ', salaneto, '<br><br>')

//problema epm
document.write('3. problema EPM <br>')

//variables
var lecanterior = 529.7
var lecactual = 1024.6
var centima = 100
//constantes
var kilovatio = 15000
var porcentajeaseo = 10

//operaciones
var consumo = (lecactual - lecanterior)
var valconsumo = (consumo*kilovatio)
var totalpago = valconsumo + ((valconsumo/centima) * (porcentajeaseo))

//resultado
document.write(' el consumo es: ',consumo,' el consumo por kilovatios es: ', valconsumo,' por lo tanto,el total a pagar es: ', totalpago, salto, salto)

//problema 4
document.write('4. En la asignatura tecnología se realizaron 5 evaluaciones. Las evaluaciones tienen una calificación del 1 a 5. La primera evaluación tiene un peso del 15%, la segunda tiene un peso del 30%, la tercera tiene un peso de 25%, la cuarta tiene un peso de 10 y la última tiene un peso del 20%. Realice un algoritmo que determine la calificación final de un estudiante sabiendo que se tiene como datos de entrada la nota (en la escala del 1 a 5) de cada evaluación.',salto, salto)

//variables

var nota1 = 5
var nota2 = 4
var nota3 = 3.5
var nota4 = 5
var nota5 = 2

//constantes

poreva1 = 0.15
poreva2 = 0.30
poreva3 = 0.25
poreva4 = 0.10
poreva5 = 0.20

//operaciones

promedionota = (nota1*poreva1) + (nota2*poreva2) + (nota3*poreva3) + (nota4*poreva4) + (nota5*poreva5)

//resultado
document.write('La calificación final del semestre fue: ', promedionota, salto, salto)

//problema 5
document.write('5. Una empresa le hace los siguientes descuentos sobre el sueldo base a sus trabajadores: 1% por ley de política habitacional, 4% por Seguro Social, 0,5% por seguro paro forzoso y 5% por caja de ahorro. Realice un algoritmo que determine el monto de cada descuento y el monto total a pagar al trabajador.', salto)

//variables

var sueldo = 700000

//constantes

var polihabitacion = 0.01
var segsocial = 0.04
var paroforzoso = 0.005
var cajahorro = 0.05

//operaciones

var habitacion = (sueldo*polihabitacion)
var social = (sueldo*segsocial)
var parforzoso = (sueldo*paroforzoso)
var cajaahorro = (sueldo*cajahorro)
var montototal = (habitacion+social+parforzoso+cajaahorro)

//resultado
document.write('el sueldo del trabajador es: ', sueldo, salto, 'el monto por descuentos es: ', salto, habitacion, salto, social, salto, parforzoso, salto, cajaahorro, salto, 'El monto total a pagar es: ', montototal, salto, salto)

//problema 6
document.write('6. Campos de Paz vende parcelas a crédito, donde el cliente da una inicial y el resto lo paga en 24 cuotas, pero con un incremento del 20% sobre lo que quedó debiendo. Teniendo como dato de entrada el precio de la parcela determine el monto de cada cuota y el precio final de la parcela.Campos de Paz vende parcelas a crédito, donde el cliente da una inicial y el resto lo paga en 24 cuotas, pero con un incremento del 20% sobre lo que quedó debiendo. Teniendo como dato de entrada el precio de la parcela determine el monto de cada cuota y el precio final de la parcela.', salto)

//variables
var perparcela = 20000000
var inicliente = 4000000

//constantes
var porincremento = 0.20

//operaciones
var preciofinal = (perparcela - inicliente)*porincremento + (perparcela - inicliente)
var cuotas = preciofinal/24

//resultado
document.write('el valor de la parcela es: ', perparcela, salto, 'la cuota inicial del cliente fue de: ', inicliente, salto, 'el porcentaje de incremento para las cuotas es del ', porincremento, ' por lo tanto, el valor total a pagar es: ', preciofinal,' dividido en 24 cuotas, por lo tanto, cada mes tiene que pagar: ', cuotas, salto, salto)

//problema 7, area y base triángulo
document.write('7. Diseñar el algoritmo correspondiente a un programa que calcule el área y el perímetro de un triángulo rectángulo dada la base y la altura', salto)

//variables
var base = 3;
var altura = 3;

//constantes
var operacion = 2;

//operación
var area = (base*altura)/2
var cateto = ((base/2)*(base/2) + (altura*altura))
var cateto = Math.sqrt(cateto)
var perimetro = base + cateto + cateto

//resultado
document.write('El área es= ', area, salto,'el cateto es: ', cateto, ' y el perímetro del triángulo es: ', perimetro, salto, salto)

//problema 8
document.write('8. Un banco paga a sus ahorrista un interés del 1.5% sobre el monto ahorrado. Teniendo como dato de entrada el saldo inicial del ahorrista determine el saldo final', salto)

//variables
var saldocliente = 1500000

//constantes
var interés = 1.015

//operaciones
var saldofinal = (saldocliente * interés)

//resultado
document.write('el saldo del cliente es: ', saldocliente, ' por lo tanto, el saldo acumulado con los intereses brindados por el banco es de: ', saldofinal, salto, salto)

//problema 9
document.write('9. Calcular el volumen de un cono', salto)

//variables
var radio = 4
var altura = 5

//constantes
var pi = 3.1416
var numero = 1/3
//operaciones
var volcono = numero*pi*altura* radio*radio

//resultados
document.write('el radio es: ', radio, salto, 'la altura es: ', altura,salto, 'por lo tanto, el volumen del cono es: ', volcono,salto, salto)

//problema 10
document.write('10. Una empresa paga a sus empleados además del sueldo base una bonificación especial de 10 %. por cada hijo. Realice un algoritmo que determine el monto de la bonificación y el monto total a pagar al trabajador.', salto)

//variables
var hijos = 4
var salario = 1200000

//constantes
var bonificación = (salario*0.10)

//operaciones
var salariofinal = salario + (bonificación*hijos)

//resultado
document.write('el salario del empleado es: ', salario, ' y su número de hijos es: ', hijos, salto, 'la bonificación brindada por la empresa de acuerdo al salario es: ', bonificación, salto, ' el salario final del empleado por sus hijos es: ', salariofinal, salto, salto)

//problema 11
document.write('11. Una institución educativa le paga a sus profesores $20.000 por hora y le hace un descuento del 5% por concepto de caja ahorro. Determine el monto del descuento y el monto total a pagar al profesor.', salto)

//variables
var horastraba = 48

//constante
var valorhora = 20000
var salariopro = (horastraba*valorhora)
var descuento = (salariopro*0.05)

//operaciones

var montofinal = salariopro - descuento

//resultados
document.write('las horas trabajadas del profesor fueron: ', horastraba, ' con un valor por hora de: ', valorhora, salto, 'el salario total del profesor con el correspondiente descuento de caja de ahorro, es de: ', montofinal, salto, salto)

//problema 13
document.write('12. Una inmobiliaria vende terrenos a $ 550.000 por el metro cuadrado. El cliente debe dar una inicial y el resto lo paga en 12 cuotas. Determine el monto de cada cuota.', salto)

//variables
var permetrocuadro = 550000
var metrocuadrado = 80
var cuotacliente = 10000000

//constantes
var valortotal = (permetrocuadro*metrocuadrado)

//operaciones
var terreno = (valortotal - cuotacliente)
var cuotasmes = terreno/12

//resultado
document.write('el valor del terreno es: ', valortotal, ', el cliente abonó una cantidad de: ', cuotacliente, ', por lo tanto, el valor a pagar en las próximas 12 cuotas es de: ', cuotasmes, ' para un total de: ', terreno, salto, salto)
