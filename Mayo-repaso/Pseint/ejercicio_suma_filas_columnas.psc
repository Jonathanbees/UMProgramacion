Algoritmo Matrices_suma
	//solicita las filas o renglones
	Escribir "Digite las columnas de la matriz"
	leer columnas
	//solicita las columnas de la matriz
	Escribir "Digite las filas de la matriz"
	leer filas
	
	//se declara la matriz
	Dimension matriz[filas,columnas]
	
	//ciclo para crear las filas y columnas
	Para i<-1 Hasta filas Con Paso 1 Hacer
		Para j<-1 Hasta columnas Con Paso 1 Hacer
			//mensaje
			Escribir "Digite la fila ",i, "columna ", j
			Leer matriz[i,j]
		Fin Para
	Fin Para
	
	
	//ciclo para mostrar la matriz
	Para i<-1 Hasta filas Con Paso 1 Hacer
		Para j<-1 Hasta columnas Con Paso 1 Hacer
			//se despliega
			Escribir "[", matriz[i,j],"]"Sin Saltar
		Fin Para
		Escribir ""
	Fin Para
	
	
	//Ciclo para sumar las filas
	Para i<-1 Hasta filas Con Paso 1 Hacer
		
		//se declara la variable sumafila para empezar a sumar
		sumafila<-0
		
		Para j<-1 Hasta columnas Con Paso 1 Hacer
			//suma como tal
			sumafila<-sumafila+matriz[i,j]
		Fin Para
		
		Escribir "la Suma de la fila ", i, " es ", sumafila
	Fin Para
	Escribir ""
	
//Ciclo para sumar las columnas
	Para i<-1 Hasta columnas Con Paso 1 Hacer
		
		//se declara la variable sumacolumna para empezar a sumar
		sumacolumna<-0
		
		Para j<-1 Hasta filas Con Paso 1 Hacer
			//suma como tal
			sumacolumna<-sumacolumna+matriz[j,i]    //se cambia el orden   porque ya no se va a recorrer todas las columnas y se pasa la fila, sino que recorre todas las filas y pasa la columna        
		Fin Para
		
		Escribir "la Suma de la columna ", i, " es ", sumacolumna
	Fin Para
	Escribir ""
	
FinAlgoritmo
