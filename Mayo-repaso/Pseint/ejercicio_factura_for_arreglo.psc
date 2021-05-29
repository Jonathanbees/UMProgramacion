Algoritmo factura_arreglo_for
	//realizar un ejercicio de factura que imprima el total, el producto de la persona, el descuento y el pago total. Si el consumo>50000 pesos, descuento del 5%,sino, 0
	Definir total,descuento, producto, pagototal Como Real
	Definir canti Como Entero
	Escribir "digite la cantidad de productos"
	leer canti              //canti sirve para indicar cuantos productos va a almacenar el arreglo
	
	dimension producto[canti]
	para i<-1 hasta canti Con Paso 1 Hacer
		
		escribir " Escriba el valor del producto: ", i
		leer producto[i]
		total=total + producto[i]
		
	FinPara
	    Si total>50000 Entonces
			descuento=total*0.05
			pagototal=total-descuento
	    SiNo
			descuento=0
			pagototal=total-descuento
	    Fin Si
	Imprimir "el pago total es: ", total
	imprimir "con un descuento de: ", descuento
	Imprimir "el pago total es: ", pagototal
		
FinAlgoritmo

