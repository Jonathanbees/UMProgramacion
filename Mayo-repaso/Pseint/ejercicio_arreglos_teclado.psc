Algoritmo arregloteclado
	Definir acum,n,posicion Como Entero
	Escribir "digite el tamaño del arreglo"
	leer n
	
	Dimension posicion[n]
	para i<-1 hasta n Con Paso 1 Hacer
		
		escribir " Escriba un valor para la posición: ", i
		leer posicion[i]
		acum=acum + posicion[i]
		
	FinPara
	
	escribir " La suma de los valores del arreglo es: ", acum
	
FinAlgoritmo
