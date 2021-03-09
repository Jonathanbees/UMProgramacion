var salto = '<br>'
document.write('<h1>Condiciones en Caso de</h1><br>');
//  En caso de:
//  Mientras variable, usar un caso  

var genero = prompt('Escriba que género es ud', '');
var msj;

switch (genero) {
    case 'Hombre':
        msj = 'Tu eres de marte';
        break;
    case 'Mujer':
        msj = 'Tu eres de venus';
        break;
    default:
        msj = 'No eres de este mundo';
        break;
}
alert(msj);
document.write(msj, salto, salto);

//problema 1
document.write('problema panadería: ', salto)

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
document.write(' el resultado es: ',resultado, salto);

//problema 2

document.write('numeros del 15 al 30', salto)

var numero = 30
for (var index = 15; index <= numero; index++) {
    document.write(index, salto)

}

//problema 3
document.write('Crea un programa que escriba la tabla de multiplicar del 5',salto)

var numero = 10;
var result;
const tabla = 5
//5*1 = 5
//5*2 = 10
//15
//20
//25

for (var i = 0; i <= numero; i++) {
    result= tabla*i  
    document.write(tabla, ' X ', i, ' = ',result, salto)
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

