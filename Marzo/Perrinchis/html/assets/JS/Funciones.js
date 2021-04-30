/*'use strict';

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
*/
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
  */
 //Cajero automático
// Constantes y Variables:
  const saldo = 900000;
  const retiros = [10000,20000,50000,200000,600000];
  const error = 'Clave Incorrecta';
  
  var salidas;
  var clave = 2345;
  var numerocuenta;

// Definir Funciones:
// Función Saldo:
function Saldo(resclave){
  // Condicionar si la clave ingresada es la correcta:
  if (resclave === clave){
    return ("Su saldo es de "+saldo);
  }else{
    return error;
  }
}
//
// test de función saldo: Saldo(2345)

// Función Retirar:
function Retiros(valor,resclave){
  // Validar que la clave sea correcta
  var resultado;
  resclave === clave ? resultado=newsaldo(valor) : resultado=error;
  return resultado  
}
//Retiros(3000,2345)

function newsaldo(valor){
  let saldonew = saldo - valor;
  let mensaje = 'Se han usado '+valor+' Su saldo actual es de '+saldonew;
  let errorsaldo = 'Fondos insufucientes';
  saldonew < saldo & saldonew > 0 ? resultado = mensaje : resultado = errorsaldo;
  return resultado;
}
// funcion Transferir:
function Transferencia(cuenta, resclave, valortransferir){
  let resultado;
  resclave === clave ? resultado=valortransfiere(valortransferir) : resultado='errores';
  return resultado
}

function valortransfiere(monto){
  var valor = saldo-monto 
  let resultado;
  valor > 0 ? resultado=newsaldo(monto) : resultado=error
  return resultado;
}
// Transferencia(123245,2345,800000);

function CambioClave(resclave, newclave){
  resclave === clave ? resultado ="Su nueva clave es "+ (clave = newclave) : resultado = error
  return resultado;
}

function inicio(operacion){
  
  if(operacion < 1 || operacion > 4){
  
  } 
    
  switch (operacion){
      case 1:
        var x = parseInt(prompt('digite la clave'))
        salidas = Saldo(x);
        break;
      case 2:
        var val = parseInt(prompt('Digite el valor a transferir'))
        var con = parseInt(prompt('digite la clave'))
        salidas = Retiros(val,con)
        break;
      case 3:
        var persona= parseInt(prompt('Indique la cuenta a transferir'))
        var sal = parseInt(prompt('Digite la clave'))
        var con = parseInt(prompt('Digite el valor a transferir'))
        salidas = Transferencia(persona, sal, con)
        break;
      case 4:
        var y = parseInt(prompt('digite la clave actual'))
        var z = parseInt(prompt('digite la clave nueva'))
        salidas = CambioClave(y, z)
        
        break;
      default:
        salidas = "Opción no válida";
      break;
      
  }
  console.log(salidas);
  document.getElementById("resultado").innerHTML = salidas
  return salidas;
}