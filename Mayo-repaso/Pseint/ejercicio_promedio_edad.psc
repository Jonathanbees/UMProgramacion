Algoritmo prom_edad
	Definir promedio Como Real
	Definir cant,edad,total Como Entero
	Escribir "digite la cantidad de personas"
	leer cant
	
	Dimension edad[cant]
	para i<-1 hasta cant Con Paso 1 Hacer
		
		escribir " Escriba la edad de la persona: ", i
		leer edad[i]
		total=total + edad[i]
		
	FinPara
	
	promedio=total/cant
	Escribir "el promedio de edad es: ", promedio
	
	
	
FinAlgoritmo
