Algoritmo arreglo_ejemplo
	//definir los valores
	Definir acum Como Entero
	Definir promedio Como Real
	
	Dimension posicion[4] //dimensiono el arreglo
	//se ingresan los valores de cada posicion del arreglo
	posicion[1]=2
	posicion[2]=4
	posicion[3]=6
	posicion[4]=8
	
	//se pone el for para ir acumulando
	Para i<-1 Hasta 4 Con Paso 1 Hacer
		acum=acum+posicion[i]
		promedio=(acum/4)
	Fin Para
	
	Escribir "la suma de los valores es: ", acum
	escribir "con un promedio de: ", promedio
	
FinAlgoritmo
