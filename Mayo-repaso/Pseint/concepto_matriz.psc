Algoritmo matrices_intro
	Definir F,C,i,j Como Entero
	F=4
	C=4
	Definir Matriz Como Entero
	Dimension Matriz[F,C]
	
	
	//lectura de una Matriz
	Para i<-1 Hasta 4 con paso 1 Hacer
		Para j<-1 Hasta 4 Con Paso 1 Hacer
			Escribir "Ingrese un dato para la tabla"
			Leer Matriz[i,j]
		Fin Para
	Fin Para
	
	//impresion en pseint de una matriz en forma normal de pseint
	
	Para i<-1 Hasta 4 Con Paso 1 Hacer
		Para j<-1 Hasta 4 Con Paso 1 Hacer
			Escribir Sin Saltar Matriz[i,j]," "
		Fin Para
		Escribir " "
	Fin Para
FinAlgoritmo
