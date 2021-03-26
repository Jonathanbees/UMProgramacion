#Funciones de fecha
/*
ADDDATE() ó DATE_ADD: Agrega funciones de tiempo en forma de intervalos de acuerdo al valor que se le asigne y se le quiera sumar
SELECT DATE_ADD('2008-01-02', INTERVAL 31 DAY);
        -> '2008-02-02'

ADDTIME(expr1,expr2): Agrega valores de hora a una expresión de fecha y/o hora
SELECT ADDTIME('2007-12-31 23:59:59.999999', '1 1:1:1.000002');
        -> '2008-01-02 01:01:01.000001'

CONVERT TZ();: convierte un valor de tiempo(dt) de la zona horaria dada por from_tz a la zona horaria dada por to_tz y devuelve el valor resultante.
SELECT CONVERT_TZ('2004-01-01 12:00:00','GMT','MET');
        -> '2004-01-01 13:00:00'

CURDATE(): regresa la fecha del día actual              CURRENT_DATE, CURRENT_DATE()

														CURRENT_DATE and CURRENT_DATE() are synonyms for CURDATE().
SELECT CURDATE();
-> 2021-03-25

CURTIME(): Regresa la hora exacta que está en el momento en que se ejecuta la función

SELECT curtime();
->21:45:50

DATE: Extrae la parte de fecha de la expresión date o datetime
SELECT DATE('2003-12-31 01:02:03');
        -> '2003-12-31'
        
DATEDIFF(expr1,expr2): Expresa la diferencia de días entre 2 fechas dadas
SELECT DATEDIFF('2010-11-30 23:59:59','2010-12-31');
        -> -31

DAYNAME(date): Regresa el nombre del día de la semana de acuerdo a la fecha que se le asigne
SELECT DAYNAME('2007-02-03');
        -> 'Saturday'

DAYOFMONTH(date): regresa el día del mes (1 a 31)
SELECT DAYOFMONTH('2007-02-03');
        -> 3
        
DAYOFWEEK(date): Regresa el día de la semana pero en formato de fecha (1 = Sunday, 2 = Monday, …, 7 = Saturday)
SELECT DAYOFWEEK('2007-02-03');
        -> 7
        
DAYOFYEAR(date): Regresa el dia del año en un rango de 1 a 366
SELECT DAYOFYEAR('2007-02-03');
        -> 34
        
EXTRACT(unit FROM date): Extrae una información dentro de una información total, de acuerdo a lo que queramos extraer
SELECT EXTRACT(YEAR FROM '2019-07-02');
        -> 2019
SELECT EXTRACT(YEAR_MONTH FROM '2019-07-02 01:02:03');
        -> 201907
        
FROM_DAYS(N): dado un número de días, arroja una fecha correspondiente a ese dia
SELECT FROM_DAYS(730669);
	-> '2000-07-03'
    
Nombres de funciones extra para el formato que queremos ver

Function Call	              Result
GET_FORMAT(DATE,'USA')	'%m.%d.%Y'
GET_FORMAT(DATE,'JIS')	'%Y-%m-%d'
GET_FORMAT(DATE,'ISO')	'%Y-%m-%d'
GET_FORMAT(DATE,'EUR')	'%d.%m.%Y'
GET_FORMAT(DATE,'INTERNAL')	'%Y%m%d'
GET_FORMAT(DATETIME,'USA')	'%Y-%m-%d %H.%i.%s'
GET_FORMAT(DATETIME,'JIS')	'%Y-%m-%d %H:%i:%s'
GET_FORMAT(DATETIME,'ISO')	'%Y-%m-%d %H:%i:%s'
GET_FORMAT(DATETIME,'EUR')	'%Y-%m-%d %H.%i.%s'
GET_FORMAT(DATETIME,'INTERNAL')	'%Y%m%d%H%i%s'
GET_FORMAT(TIME,'USA')	'%h:%i:%s %p'
GET_FORMAT(TIME,'JIS')	'%H:%i:%s'
GET_FORMAT(TIME,'ISO')	'%H:%i:%s'
GET_FORMAT(TIME,'EUR')	'%H.%i.%s'
GET_FORMAT(TIME,'INTERNAL')	'%H%i%s'

HOUR(time): Regresa la hora de una hora dada
SELECT HOUR('10:05:03');
        -> 10

LAST_DAY(date): Regresa el último día de un mes de acuerdo a la fecha que se ponga
SELECT LAST_DAY('2003-02-05');
        -> '2003-02-28'
        
NOW([fsp]): Regresa la fecha y hora exactas del momento en que se ejecuto la función

SELECT NOW();
-> '2021-03-25 22:27:30'


*/

/* FUNCIONES ESTADÍSTICAS DE AGRUPAMIENTO

La función "sum()" retorna la suma de los valores que contiene el campo especificado.
select sum(cantidad)

Para averiguar el valor máximo o mínimo de un campo usamos las funciones "max()" y "min()" respectivamente. Ejemplo, queremos saber cuál es el mayor precio de todos los libros:
select max(precio)
Ejemplo: Queremos saber cuál es el valor mínimo de los libros de "Rowling":
select min(precio) from libros
where autor like '%Rowling%';

La función avg() retorna el valor promedio de los valores del campo especificado. Por ejemplo, queremos saber el promedio del precio de los libros referentes a "PHP":

select avg(precio) from libros
where titulo like '%PHP%';



