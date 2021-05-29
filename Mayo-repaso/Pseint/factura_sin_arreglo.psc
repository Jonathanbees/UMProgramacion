Algoritmo repita
	Definir total,descuento, producto, pagototal Como Real
	definir contador, canti Como Entero
	
	contador<-1
	Escribir "ingrese la cantidad de productos"
	leer canti
	
	Repetir
		Escribir "ingrese el producto ", contador
		leer producto
		
		total=total+producto
		
		contador<-contador+1
	Hasta Que contador>3
	
	Si total>50000 Entonces
		descuento<-total*0.05
		pagototal<-total-descuento
	SiNo
		descuento<-0
		pagototal<-total-descuento
	Fin Si
	
	Imprimir "el valor total de los productos es: ", total
	Imprimir "con un descuento de: ", descuento
	Imprimir "para un total a pagar de: ", pagototal
FinAlgoritmo
