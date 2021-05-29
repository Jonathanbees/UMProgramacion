Algoritmo grupo
	//leer 3 notas de 3 alumnos, se debe de Imprimir  el promedio por alumno, el promedio del grupo general y las notas deben ser ingresadas por el usuario
	Definir fila, columna, i, j Como Entero
	Definir promedio_alumno, promedio_general Como Real
	
	fila<-3
	columna<-3
	Dimension notas[fila,columna]           //las filas son los alumnos
	                                        // las columnas son las notas
	
	Para i<-1 Hasta 3 Con Paso 1 Hacer
		Para j<-1 Hasta 3 Con Paso 1 Hacer
			Escribir "ingrese la nota: ", j, " del estudiante ", i
			leer notas[i,j]
		Fin Para
		
	Fin Para     //solamente para ingresar las notas
	
	//Imprimir notas y generar promedio por alumno
	
	Para i<-1 Hasta 3 Con Paso 1 Hacer
		Escribir  "Notas del alumno ", i, ": " Sin Saltar
		promedio_alumno<-0
		Para j<-1 Hasta 3 Con Paso 1 Hacer
			Escribir sin saltar "[ ", notas[i,j],"] "  //está diciendo que muestre todo en orden
			promedio_alumno<-promedio_alumno+notas[i,j]
		Fin Para
		Escribir " "
		Escribir "la nota promedio del alumno ", i, " es: ", promedio_alumno/3
	Fin Para
	
	Para i<-1 Hasta 3 Con Paso 1 Hacer
		Para j<-1 Hasta 3 Con Paso 1 Hacer
			promedio_general<-promedio_general+notas[i,j]
		Fin Para
	Fin Para
	Escribir "la nota general del grupo es: ", promedio_general/9
	
FinAlgoritmo
