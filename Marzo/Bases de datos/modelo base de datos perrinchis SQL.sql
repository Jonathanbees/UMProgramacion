#Tarea Consulta documentación MySQL
/*
Funciones y operadores de comparación

& = AND
> = mayor que 
>= mayor o igual que                     Nota: Si no se cumple algún operador, arrojará 0, sino, un 1 Ejemplo: SELECT 3 <= 2; -> 0
< = menor que
<= menor o igual que
<> Ó != distinto de 
<=> No es distinto: si ambos operadores son iguales, arroja 1, sino, arrojará 0, en caso de colocar NULL, si uno es distinto del otro, saldrá 0,sino, 1
Ejemplo: SELECT 1 <=> 1, NULL <=> NULL, 1 <=> NULL;
        -> 1, 1, 0
= opera como "no es distinto", pero si un valor no es igual al otro, dará 0, si se compara con un NULL, dará un NULL si no son lo mismo
SELECT 1 = 1, NULL = NULL, 1 = NULL, 2 = 1
        -> 1, NULL,          NULL,    0

Caso especial <=>
For row comparisons, (a, b) <=> (x, y) is equivalent to:

(a <=> x) AND (b <=> y)

* expr BETWEEN min AND max
If expr is greater than or equal to min and expr is less than or equal to max, 
BETWEEN returns 1, otherwise it returns 0. This is equivalent to the expression (min <= expr AND expr <= max) 
if all the arguments are of the same type. Example: SELECT 2 BETWEEN 1 AND 3, 2 BETWEEN 3 and 1;
													-> 1, 0
*/
                                                     
 #   SELECT COALESCE(NULL,1, 2, 3, 4);   Duda Operador
 # Salta los operadores que están nulos y ejecuta los disponibles, solo mostrando el primer valor(verdaderos)
/*
Greatest(v1,v2...)
Con 2 o más valores agregados a este operador, retorna el más grande
Ejemplo: SELECT GREATEST(34.0,3.0,5.0,767.0);
        -> 767.0
        
LEAST(v1,v2...)
Retornará el valor más pequeño entre un conjunto de valores asignados
Ejemplo: SELECT LEAST(34.0,3.0,5.0,767.0);
        -> 3.0
        
expresion IN (value1...)
Retornará verdadero (1) si entre la lista asignada está el valor que estamos buscando, si no, retornará falso (0)
Ejemplo: SELECT 'wefwf' IN ('wee','wefwf','weg');
        -> 1
        
        Nota: Con un NOT, es lo mismo, pero en distinto sentido: si no está, sale verdadero, si está, sale falso
        SELECT 'wefwf' Not IN ('wee','wefwf','weg');
*/

/*
INTERVAL:
es para formar intervalos, es necesario que N1<N2<N3...Nn para que trabaje correctamente, si trabaja correctamente, regresará un 0
SELECT INTERVAL(1, 15, 17, 30, 44, 200);
*/

/*
IS boolean_value
Evalua un valor como un valor booleano, donde el valor booleano puede ser: TRUE, FALSE, UNKNOWN
Ejemplo: SELECT 1 IS TRUE, 0 IS FALSE, NULL IS UNKNOWN;
        -> 1, 1, 1

IS NOT boolean_value
Evalua un valor booleano pero con el NOT
SELECT 1 IS NOT UNKNOWN, 0 IS NOT UNKNOWN, NULL IS NOT UNKNOWN;
        -> 1,              1,                    0
SELECT 1 IS NOT true, 0 IS NOT UNKNOWN, NULL IS NOT UNKNOWN;
0,                       1,                     0
*/

#Tarea: 
-- Funciones de texto,
-- Funciones de fecha,
-- Funciones aritméticas
-- Funciones estadísticas
-- Funciones con operadores logicos and or between, ...

/*
ISNULL(expr)
Si una expresión es Nula (NULL), regresará 1 (verdadero), sino, falso(0)
 SELECT ISNULL(1+1);
        -> 0
SELECT ISNULL(1/0);
        -> 1
ISNULL() puede ser usado para comprobar cuando hay un valor nulo



