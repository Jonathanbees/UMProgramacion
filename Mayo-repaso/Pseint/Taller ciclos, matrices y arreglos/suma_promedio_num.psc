Algoritmo suma_promedio_num
	//3.	Realizar un algoritmo que pida 5 números por teclado y los sume, luego los promedie
	Definir suma, num,i, total Como Entero
	Definir promedio Como Real
	
	Escribir "Digite la cantidad de numeros"
	leer total
	
	Para i<-1 Hasta total Con Paso 1 Hacer
		Escribir "Digite el numero ", i
		leer num
		suma<-suma+num
		
	Fin Para
	promedio<-(suma/total)
	
	Imprimir "la cantidad de numeros ingresados es: ", total
	Imprimir "La suma de los numeros ingresados es: ", suma
	Imprimir "El promedio de los numeros es: ", promedio
	
FinAlgoritmo
