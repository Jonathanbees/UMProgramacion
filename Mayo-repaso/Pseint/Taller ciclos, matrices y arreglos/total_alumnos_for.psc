Algoritmo total_alumnos_for
      //1.	Realizar un algoritmo que permita obtener cuantos datos ingresados pertenecen a mujeres y cuantos, 
      //a hombres de acuerdo a la cantidad de alumnos, que digite el usuario
	Definir i,total,sexo,hombres,mujeres Como Entero
	Escribir "Escribe el numero de alumnos"
	leer total
	i = 1
	hombres = 0
	mujeres = 0
	
	Para i<-1 Hasta total Con Paso 1 Hacer
		Escribir "Escriba un numero de acuerdo al sexo"
		Escribir "1 = hombre"
		Escribir "2 = mujer"
		leer sexo
		si sexo == 1 Entonces
			hombres = hombres + 1
		SiNo
			si sexo == 2 Entonces
				mujeres = mujeres + 1
			SiNo
				Escribir "Escribe un numero correcto"
				i = i - 1
			FinSi
		FinSi
	Fin Para
	Escribir "La cantidad de hombres es: ",hombres
	Escribir "La cantidad de mujeres es: ",mujeres
FinAlgoritmo
