# Traemos el resultado esperado:
select 
	datospersonales.cedula as 'Cédula', 
	concat(datospersonales.nombre,' ',datospersonales.apellidos) as 'Nombre Completo', 
	perfiles.fechaing as 'Fecha de Ingreso'
from datospersonales
join perfiles
on datospersonales.idUsuarios = perfiles.idUsuarios
join generos
on datospersonales.idGeneros = generos.idGeneros
where generos.Genero = 'Femenino'
group by datospersonales.cedula;

# Limpieza de la información:
update datospersonales
set idGeneros = 2
where cedula = '98234732';

## Tarea: mostrar todos los empleados hombres, y mujeres separado
## Tarea: mostrar todos los clientes hombres, y mujeres separado
## Tarea: mostrar todos los usuarios que tienen pasaporte, y los que tienen cedula

select*from tipousuario;
select*from generos;
select*from perfiles;
select*from datospersonales;
select*from usuarios;

#Consulta empleados hombres
select
  perfiles.idTipoUsuario as 'empleados',
  concat(datospersonales.nombre,' ',datospersonales.apellidos) as 'Nombre Completo' 
from perfiles
join datospersonales
on datospersonales.idUsuarios= perfiles.idUsuarios and datospersonales.idGeneros = 1
where perfiles.idTipoUsuario = 2
group by datospersonales.cedula;

#Consulta empleados mujeres
select
  perfiles.idTipoUsuario as 'empleados',
  concat(datospersonales.nombre,' ',datospersonales.apellidos) as 'Nombre Completo' 
from perfiles
join datospersonales
on datospersonales.idUsuarios= perfiles.idUsuarios and datospersonales.idGeneros = 2
where perfiles.idTipoUsuario = 2
group by datospersonales.cedula;

/*   Limpieza de datos incorrectos
update datospersonales
set idGeneros= 1
where cedula ='1000363321';
*/

#Consulta para los clientes hombres
select
  perfiles.idTipoUsuario as 'clientes',
  concat(datospersonales.nombre,' ',datospersonales.apellidos) as 'Nombre Completo' 
from perfiles
join datospersonales
on datospersonales.idUsuarios= perfiles.idUsuarios and idGeneros = 1
where perfiles.idTipoUsuario = 3
group by datospersonales.cedula;

#Consulta para los clientes mujeres
select
  perfiles.idTipoUsuario as 'clientes',
  concat(datospersonales.nombre,' ',datospersonales.apellidos) as 'Nombre Completo' 
from perfiles
join datospersonales
on datospersonales.idUsuarios= perfiles.idUsuarios and idGeneros = 2
where perfiles.idTipoUsuario = 3
group by datospersonales.cedula;

#3. Cédula y pasaporte de los usuarios: Ejercicio

select*from perfiles;
select*from datospersonales;
select*from usuarios;
select*from tipodocus;

#Consulta para los que tienen cédula
select datospersonales.idTipoDocus as 'Cédula',
concat(datospersonales.nombre,' ',datospersonales.apellidos) as 'Nombre Completo' 
from datospersonales
where idTipoDocus = 3;

#Consulta para los que tienen pasaporte
select datospersonales.idTipoDocus as 'Cédula',
concat(datospersonales.nombre,' ',datospersonales.apellidos) as 'Nombre Completo' 
from datospersonales
where idTipoDocus = 4;