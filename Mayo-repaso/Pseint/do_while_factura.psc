Algoritmo factura_do_while
	
	Definir total,descuento, producto, pagototal Como Real
	Definir i,canti Como Entero
	
	i<-1
	
	Escribir "digite la cantidad de productos"
	leer canti              //canti sirve para indicar cuantos productos va a almacenar el arreglo
	dimension producto[canti]
	Repetir
		
		escribir " Escriba el valor del producto: ", i
		leer producto[i]
		total=total + producto[i]
		
		i=i+1
		
		Si total>50000 Entonces
			descuento=total*0.05
			pagototal=total-descuento
	    SiNo
			descuento=0
			pagototal=total-descuento
	    Fin Si
		
	Hasta Que i>canti
	Imprimir "el pago total es: ", total
	imprimir "con un descuento de: ", descuento
	Imprimir "el pago total es: ", pagototal
FinAlgoritmo