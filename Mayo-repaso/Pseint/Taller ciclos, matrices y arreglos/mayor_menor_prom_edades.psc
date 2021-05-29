Algoritmo Mayor_menor_promedio
    //2.	Realizar un algoritmo que permita ingresar la edad de 4 personas y 
    //  determine quién es el mayor y es el menor, así como el promedio de edad general.

	Definir i,numer,edades,numero_mayor,num_menor, suma Como Entero
	Definir promedio Como Real
	Escribir "Escribe la cantidad de personas"
	leer edades
	i = 1
	Mientras i <= edades Hacer
		Escribir "Escribe la edad de la persona ", i
		leer numer
		suma<-suma+numer
		si i == 1 Entonces
			numero_mayor = numer
			num_menor= numer
		SiNo
			si numer > numero_mayor Entonces
				numero_mayor = numer
			FinSi
			si (numer<num_menor) Entonces
				num_menor<-numer
			FinSi
		FinSi
		i = i + 1
		
	FinMientras
	promedio<-suma/edades
	Escribir "La mayor edad es: ",numero_mayor, " años"
	Escribir "La menor edad es: ", num_menor, " años"
	Escribir "El promedio de edad es: ", promedio, " años"
FinAlgoritmo
