Algoritmo sum_array
	//4.	Realizar un algoritmo que Sume todos los elementos de un arreglo de tamaño n, ingresado por el usuario
	Definir suma, num,i, total Como Entero
	
	Escribir "Digite la cantidad de numeros"
	leer total
	Dimension num[total]
	

	Para i<-1 Hasta total Con Paso 1 Hacer
		Escribir "Digite el numero ", i
		leer num[i]
		suma<-suma+num[i]
		
	Fin Para
	Imprimir "la cantidad de numeros ingresados es: ", total
	Imprimir "La suma de los numeros ingresados es: ", suma
FinAlgoritmo
