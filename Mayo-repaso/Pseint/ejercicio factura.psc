Algoritmo factura
	Definir total,descuento, producto, pagototal Como Real
	Definir contador Como Entero
	
	contador<-1
		Mientras (contador<=5) Hacer
			Imprimir "ingrese el valor del producto", contador
			leer producto
			contador=contador+1
			total= producto+total
		
		Fin Mientras
		Si total>50000 Entonces
			descuento=total*0.05
		SiNo
			descuento=0
		Fin Si
		Imprimir "el pago total es: ", total
		imprimir "con un descuento de: ", descuento
		Imprimir "el pago total es: ", (total-descuento)
	
FinAlgoritmo
