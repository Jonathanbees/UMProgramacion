// document.write("hola mundo");
//var salto = '<br>';
/* Areas
Círculo: pi*r*r                       variable:Radio(R)          Constantes: pi
Triángulo = (base*altura)/2           variable: base, altura       constantes: 2
cuadrado = base * altura              variable: base,altura
*/

/* Pasos:
1.Definir constantes
2. Preguntar que quiere hallar el usuario    en un ciclo
3. Realidzar la operación y mostrar resultado
4. Finalizar a la 4 operación
*/
// let area;
// const pi = 3.1416;
// const divisor = 2;
// var index = 1;
// let pregunta;
// for (let index = 1; index <= 4; index++){
//     pregunta = parseInt(prompt('indique el area que quiere hallar: 1.circulo, 2.triangulo, 3.cuadrado'))
//     if (pregunta < 0 || pregunta >3) {
//         alert('Opción inválida')
//         index = index;
//     }

//     switch (pregunta) {
//         case 1:
//             let radio = prompt('Indique el radio')
//             radio = parseFloat(radio);
//             area = pi*radio*radio
//             document.write(salto, salto, 'el area del círculo es', area);
//             break;
    
//         case 2:
//             var base = parseFloat(prompt('Indique la base', ''))
//             var altura = parseFloat(prompt('Indique la altura', ''))
//             area = (base*altura)/divisor
//             document.write(salto, salto, 'el area del triángulo es: ', area)
//             break;
//         case 3:
//             var base = parseFloat(prompt('Indique la base', ''));
//             var altura = parseFloat(prompt('Indique la altura', ''));
//             area = base*altura
//             document.write(salto, salto, 'el area del cuadrado es: ', area)
//             break;
//         default:
//             let mensaje = 'Opción no válida';
//             index = index - 1;
//         break;

//     }
// }
//Algoritmo para realizar una o más compras:
/* 
Preguntar por el producto a comprar.
2. Pregunta si desea seguir comprando
3. Indicar el valor a pagar, si es mayor calcular, si es menor, indicar cuanta plata le falta
*/
// const producto1 = 'Comedero gato';
// const preciopr1 = 12000;
// const producto2 = 'Comedero perro'
// const preciopr2 = 13000
// let compra = 1;
// let total = 0;
// do {
//     let pregunta = prompt('Escoja producto', '');
//     if (producto1 === pregunta) {
//         total = total + preciopr1;
//     }
//     if (producto2 === pregunta){
//         total = total + preciopr2
//     }
//     if (pregunta = !producto1 || !producto2){
//         document.write('producto inválido')
//     }
//     let seguir = prompt('Desea seguir comprando?', '');
//     if (seguir === 'si') {
//         compra = 1; 
//     }else{
//         compra = 0;
//     }

// }while(compra === 1);

// document.write('total a pagar: ', total)


//Ejercicio monto trabajador
var salto = '<br>';
var añostrabaj = parseInt(prompt('¿cuantos años ha trabajado?', ''));
var sueldo =parseInt(prompt('ingrese el sueldo mensual: ', ''));
const mes = 30
const sueldodia = sueldo/mes

const vacaciones = sueldodia*7 + añostrabaj*sueldodia
const bfinaño = sueldodia*45
const fidecomiso = sueldo*0.12

document.write('el salario mensual es ', sueldo, salto, 'los años trabajados son: ', añostrabaj, salto, 'el bono de vacaciones respecto al salario y años es: ', vacaciones,salto, 'el bono de fin de año es: ', bfinaño, salto, 'y el valor de fieicomiso es: ', fidecomiso)

