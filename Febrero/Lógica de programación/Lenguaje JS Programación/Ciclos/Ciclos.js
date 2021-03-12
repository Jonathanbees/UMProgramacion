var salto = '<br>';
document.write('<h1>Condiciones en Caso de</h1><br>');
//  En caso de:
//  Mientras variable, usar un caso  

var genero = prompt('Escriba que género es ud', '');
var msj;

switch (genero) {
    case 'hombre':
        msj = 'Tu eres de marte';
        break;
    case 'mujer':
        msj = 'Tu eres de venus';
        break;
    default:
        msj = 'No eres de este mundo';
        break;
}
alert(msj);
document.write(msj, salto, salto);

//problema 1
document.write('1. problema panadería: ', salto)

var horasalida = prompt('Ingrese la hora de salida','');
var horasalida = parseInt(horasalida)
var mensaje

if (horasalida >= 7) {
    horasalida = 1
}else {
    horasalida = 2
}


switch (horasalida) {
    case 1:
        mensaje = 'no desayunaste y te fuiste en metro'
        break;
    case 2:
        mensaje = 'desayunaste y te fuiste en metro'
        break;
    default:
        mensaje = 'no ingresaste hora'
        break;
}
alert(mensaje)
document.write(mensaje, salto)

//problema 1

// numero = 5; el factorial es: 1*2*3*4*5*6
var factorial = prompt('Ingrese el número a factorial','');
var factorial = parseInt(factorial);
var resultado = 1;
var i = 1;

                            //forma do
//do {
    //document.write(i,'<br>Espero un 720<br>');
    //resultado = resultado *i;
    //i++;
//}while(i <= factorial);
//document.write(resultado, salto);


                                       //forma for
for (var i = 1; i <= factorial; i++) {
  document.write(i,'<br>Espero un 720<br>');
    resultado = (resultado * i);
}
document.write(' el resultado es: ',resultado, salto, salto);

//problema 2

document.write('2. numeros del 15 al 30', salto)

var numero = 30
for (var index = 15; index <= numero; index++) {
    document.write(index, salto)

}
salto

//problema 3
document.write('3. Crea un programa que escriba la tabla de multiplicar del 5',salto)

var numero = 10;
var result;
const tabla = 5
//5*1 = 5
//5*2 = 10

for (var i = 0; i <= numero; i++) {
    result= tabla*i  
    document.write(tabla, ' X ', i, ' = ',result, salto)
}
salto, salto

document.write('4. Realizar un algoritmo que permita obtener cuantos datos ingresados pertenecen a mujeres y cuantos a hombres de acuerdo a la cantidad de alumnos digite el usuario', salto)

//variables
var hombres = prompt('ingrese numero de hombres')
var hombres = parseInt(hombres)

var mujeres = prompt('ingrese numero de mujeres')
var mujeres = parseInt(mujeres)

const suma = mujeres + hombres
var total;

for (let index = 1; index <= hombres; index++) {
    total = (hombres/suma)*100
    document.write(' la cantidad de hombres es: ', index, ' , ')
    document.write(salto, 'el porcentaje de hombres es: ', total)
}
for (let index = 1; index <= mujeres; index++) {
    total = (mujeres/suma)*100
    document.write(' la cantidad de mujeres es: ', index, ' , ')
    document.write(salto, 'el porcentaje de mujeres es: ', total)
}

document.write('<h1>Ciclos </h1>');
// 4.	Realizar un algoritmo que permita obtener cuantos datos ingresados pertenecen a 
// mujeres y cuantos a hombres de acuerdo a la cantidad de alumnos digite el usuario.

// Bandera para controlar el ciclo:
var cantidadalumnos = prompt('Ingrese la cantidad de alumnos a registrar', '');

// Casteamos la variable: Pasar de texto a número:
cantidadalumnos = parseInt(cantidadalumnos);
// Defino Variables para tener en cuenta: 
var mujeres = 0;
var hombres = 0;
// Comodin:
var msjError = "No se pueden calcular valores nulos o negativos";
// Impresión Bonita:
document.write('<table border="2px"><thead><tr>Mujeres</tr><tr>Hombres</tr></thead><tbody>');
console.log(cantidadalumnos);

// Resolver el problema:
if (cantidadalumnos > 0) {
    // Si la variable cantidadalumnos es mayor a 0 entonces hago un ciclo:
    for (var i = 1; i <= cantidadalumnos; i++) {
        var genero = prompt('Genero del alumno','');
        // Condicionamos el sexo:
        if (genero === "mujer") {
            mujeres = mujeres +1;
            console.log(mujeres)
        }
        if (genero === "hombre") {
            hombres = hombres +1;
            console.log(hombres);
        }
    }
}else{
    // Si cantidad alumnos es 0 o menor entonces muestro un mensaje:
    document.write(msjError);
}

document.write('<td>',mujeres,'</td>','<td>',hombres,'</td></tbody></table>');



//problema 5
document.write('5. Realizar un algoritmo que permita encontrar los números primos entre 1 y N donde N es la cantidad superior dada por el usuario. <br>')

//variables

var n1, n2, primo, index, j;
n1 = parseInt(prompt('introduce tu valor mínimo'));
n2 = parseInt(prompt('introduce tu valor máximo'));
primo=true;
index = 0
j = 0

for(index=n1;index<=n2; index++){
    primo=true;
    for(j=2; j<index;j++){
        if (index%j==0) {
            primo=false;
        }
    }
    if(primo==true){
        document.write('<br>'+j)
    }

}

//problema 6
document.write(salto, 'Realizar un algoritmo que pida 5 números por teclado y los sume, luego los promedie.')

var numero1= parseInt(prompt('introduce tu primer numero'))
var numero2= parseInt(prompt('introduce tu segundo numero'))
var numero3= parseInt(prompt('introduce tu tercero numero'))
var numero4= parseInt(prompt('introduce tu cuarto numero'))
var numero5= parseInt(prompt('introduce tu quinto numero'))

var promedio = (numero1 + numero2 + numero3 + numero4 + numero5)/5

document.write('los numeros ingresados son: ', numero1, '<br>', numero2, '<br>', numero3,'<br>', numero4, '<br>', numero5, '<br>')
document.write('el promedio es: ', promedio, salto)


// 7.	Realizar un algoritmo que imprima 10 números al azar (ENTRE 1 Y 100) 
// y muestre el promedio de estos, cual es el mayor y cuál es el menor. Azar(100)
const veces = 10;
var promedio = 0;
let max = 100;
let min = 1;
var valmax = 0;
var valmin = 100;

for (let index = 0; index < veces; index++) {
    // Saco los numeros al azar:
    let numero =  Math.floor(Math.random()* (max - min)) + min;
    document.write('Numero al azar = ',numero, salto);
    promedio = promedio + numero;

    if (valmin > numero) {
        valmin = numero
        document.write(valmax , salto)
    }
    if (valmax < numero) {
        valmax = numero
        document.write(valmin , salto)
    }
}
promedio = promedio / veces;
document.write('El promedio de la suma de los numeros aleatorios es ',promedio, salto);
document.write('Numero Máximo = ', valmax, ' Numero Minimo = ', valmin);



