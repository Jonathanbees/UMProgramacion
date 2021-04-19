'use strict';

function login(user, pass) {
    //declarar constantes y variables
    const usuario = 'gaby@mail.com';
    const clave = '12345';

    //variables o datos de ingreso del usuario

    var user= document.getElementById('txtuser').value;
    var pass= document.getElementById('txtpass').value;


    //console.log(user,pass);
    //validación de los datos ingresados, con una condición

    if (user===usuario & pass===clave) {
        //si las variables son iguales a las constantes, mensaje de bienvenida
        document.write('Bienvenido', usuario);
        window.location = 'Catalogo.html';

    }else {
        document.getElementById('error').innerHTML= '<div class="alert alert-danger" role="alert">usuario y/o contraseña incorrectos</div> ' ;
        console.log('dirigir a otra página');
    }
    
   



    
}
//Ejercicio trabajador
//Teniendo como dato de entrada el sueldo base y los años de servicio de un trabajador, realice un algoritmo que determine el monto del bono vacacional, bono fin de año y fideicomiso. Las vacaciones corresponden a 7 días desueldo mas un día por cada año de servicio, el bono fin de año corresponde a 45 días de sueldo, y el fideicomiso corresponde al 12% del sueldo

/*Funcion prestaciones laborales:
function prestaciones(sueldo, years){
    // Datos que debemos hallar:
/Ejercicio monto trabajador
var salto = '<br>';
function prestaciones(sueldo, years){
    // Datos que debemos hallar:
    let vacaciones;
    let finyear;
    let fideicomiso;
    
    // Si el año es menor o igual a 1 calculo vacaciones:
    if (years <= 1){
      vacaciones = (sueldo/30) * 7;
    }else{
      vacaciones = ((sueldo/30) * 7) + ((sueldo/30) * (years-1));
    }
    // Calcular los bonos restantes:
    finyear = (sueldo/30) * 45;
    
    fideicomiso = (sueldo/100) * 12;
    console.log('Las prestaciones a devengar por parte del usuario son:');
    console.log('Prestacion Vacaciones= ', vacaciones);
    console.log('Prestacion Fin de Año= ', finyear);
    console.log('Prestacion Fideicomiso= ', fideicomiso);
  }
  prestaciones(1500000, 5);
  */

  //Ejercicio monto trabajador
 /* var saldo = parseInt(prompt('ingrese el saldo'))
  function salario(valorsal) {
    if (saldo >=1) {
      document.write('su saldo es: ', saldo)
    }else{
      document.write('no hay saldo en la cuenta, intente más tarde.')
    }
  }

function retirar(valores) {
  const val1 = 10000
  const val2 = 20000
  const val3 = 50000
  const val4 = 200000
  const val5 = 600000
  var retiro = parseInt(prompt('¿Cuanto desea retirar?'))
  }
}
*/

//funcion clave
var p1 = document.getElementById("clave").value;
var p2 = document.getElementById("validarclave").value;
contador = 0
function claves(clave, newclave){
  newclave;
  while (p1===p2 && p1&p2 != 0 &&contador <p1&p2){
   if (p1!=p2) {
    alert("Las passwords deben de coincidir") return false;
     
   } else {alert("contraseña correcta") return true;
    contador++;
    newclave = document.getElementById("nuevaclave").value;
    clave = newclave
}
    


claves(1234,2345)