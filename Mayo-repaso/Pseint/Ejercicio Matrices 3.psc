Algoritmo sin_titulo
	//Leer 3 Notas de 3 Alumnos 
	Definir F,C,i,j Como Entero
	F=3
	C=3
	definir NotaPromedio Como Real
	Definir Notas Como real
	Dimension Notas[F,C] 
	
	//Leemos las calificaciones
	para i<-1 hasta 3 Hacer
		para j<-1 hasta 3 Hacer
			Escribir "Ingrese la nota ",j," Del estudiante ",i
			leer Notas[i,j]
		FinPara
	FinPara
	
	//Imprimiendo las notas 
	para i<-1 hasta 3 Hacer
		Escribir Sin Saltar "Notas del Alumno ",i,": "
		para j<-1 hasta 3 Hacer
			Escribir Sin Saltar Notas[i,j], " "
		FinPara
		Escribir " "
	FinPara
	
	//Nota Promedio
	para i<-1 hasta 3 Hacer
		para j<-1 hasta 3 Hacer
			NotaPromedio<- NotaPromedio+ Notas[i,j]
		FinPara
	FinPara
	Escribir "La nota Promedio es: ", NotaPromedio/9
	
	//Nota Promedio X Alumno
	para i<-1 hasta 3 Hacer
		NotaPromedio<-0 
		para j<-1 hasta 3 Hacer
			NotaPromedio<- NotaPromedio+ Notas[i,j]
		FinPara
		Escribir "La nota Promedio del Alumno",i," es: ", NotaPromedio/3
	FinPara
	
FinAlgoritmo
