Algoritmo matriz_ej1
		Definir F,C,i,j Como Entero
		F=2
		C=3
		Definir Matriz Como Entero
		Dimension Matriz[F,C]
		
		
		//lectura de una Matriz
		Para i<-1 Hasta 2 con paso 1 Hacer
			Para j<-1 Hasta 3 Con Paso 1 Hacer
				Escribir "Ingrese un dato para la tabla"
				Leer Matriz[i,j]
			Fin Para
		Fin Para
		
		//impresion en pseint de una matriz en forma normal de pseint
		
		Para i<-1 Hasta 2 Con Paso 1 Hacer       //el primer for funciona como los datos para las filas
			Para j<-1 Hasta 3 Con Paso 1 Hacer
				Escribir Sin Saltar Matriz[i,j]," "             //el segundo for funciona como los datos para las columnas
			Fin Para
			Escribir " "
		Fin Para

FinAlgoritmo
