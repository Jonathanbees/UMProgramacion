Algoritmo detarea
		Definir i,total,sexo,hombres,mujeres Como Entero
		Escribir "Escribe el numero de alumnos"
		leer total
		i = 1
		hombres = 0
		mujeres = 0
		Mientras i <= total Hacer
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
			i = i + 1
		FinMientras
		Escribir "La cantidad de hombres es: ",hombres
		Escribir "La cantidad de mujeres es: ",mujeres
FinAlgoritmo

