/*ejercicio 2 - dado el sueldo de un empleado imprimir en una alerta el nuevo sueldo del empleado si tuvo un aumento del 10%

let sueldo = prompt("Ingrese el valor del suedo")
let psueldo = 10/100;
let nsueldo = parseInt(sueldo) + parseInt(sueldo*psueldo)

alert("El nuevo sueldo con el aumento es: $" +nsueldo+ "COP") */

/*ejercicio 1 - un vendedor que tiene su sueldo base recive una comision del 30% del total de las ventas del mes, el quiere saver cuanto ganara en un mes que tuvo 3 ventas
let sueldo = prompt("Ingrese el valor del suedo");
let venta1 = prompt("Ingrese el valor de la venta");
let venta2 = prompt("Ingrese el valor de la venta");
let venta3 = prompt("Ingrese el valor de la venta");
let porc = 30/100;
let comision = parseInt(venta1)+ parseInt(venta2)+ parseInt(venta3);
let resul = parseInt(sueldo) + parseInt(comision*porc);
let resulf = parseInt(resul); 

alert("Su sueldo junto a la comision por las 3 ventas es de $" +resulf+ " COP");*/

/*ejercicio 1 - Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra
let p1 = prompt("ingrese valor del producto")
let p2 = prompt("ingrese valor del producto")
let p3 = prompt("ingrese valor del producto")
let porc = 25/100;
let porcp1 = parseInt(p1) - parseInt(p1*porc)
let porcp2 = parseInt(p2) - parseInt(p2*porc)
let porcp3 = parseInt(p3) - parseInt(p3*porc)
let pagof = parseInt(porcp1+porcp2+porcp3)
alert("El valor a pagar por cada porducto es de: "+pagof)*/


/*ejercicio 2 - Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual
let inv = prompt("ingre v alor de inversion")
let porc = 2/100;
let gana = parseInt(inv*porc)
alert("al final del mes obtuvo una ganacia de " +gana)*/

/*Ejercicio 3 - Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final. 
let promedio = prompt("ingrese el promedio de sus calificaciones");
let exam = prompt("ingrse la calificacion de su examen final");
let trab = prompt("ingrese la calificacion de su trabajo final");
let pro1 = 55/100;
let pro2 = 30/100;
let pro3 = 15/100;
let pp = parseInt(promedio*pro1);
let pe = parseInt(exam*pro2);
let pt = parseInt(trab*pro3);
let cf = parseInt(pp)+ parseInt(pe)+ parseInt(pt);
alert("su calificacion final en la materia de algoritmos es de " +cf);*/

/* Ejercicio 4 - El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%
let pa = prompt("Ingresa el valor del articulo comprado");
let porce = 30/100;
let ptotal = parseInt(pa)+ parseInt(pa*porce);
alert("el precio al que debe vender el producto es de $ " +ptotal);*/

/* Ejercicio 5 - Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera. 
let distancia = prompt("ingrese la distancia recorrida en kilometros");
let tiempo = prompt("ingrese el tiempo de la carrera en minutos");
let mpagar = parseInt(15000*distancia)+ parseInt(2000*tiempo);
alert("el monto a pagar es de $ " + mpagar);*/

/* Ejercicio 6 - Realizara un programa en el cual se van a leer tres números y determinar el
cuadrado de cada uno de ellos. 
let num1 = prompt("ingrese el primer número")
let num2 = prompt("ingrese el segundo número")
let num3 = prompt("ingrese el tercer núemro")
let cua1 = Math.pow(num1, 2);
let cua2 = Math.pow(num2, 2);
let cua3 = Math.pow(num3, 2);
alert("el cuadrado de los tres numeros es de " +cua1+ " el primer numero," +cua2+" el segundo numero y " +cua3+ " el tercer numero");*/


/* Ejercicio 7 - En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El
presupuesto anual del hospital se reparte conforme a la sig. tabla:
Area          : Porcentaje del presupuesto
ginecología   : 40%
traumatología : 30% 
pediatría     : 30%
Obtener la cantidad de dinero que recibirá cada área, para cualquier monto
presupuestal.
let presupuesto = prompt("Ingrece el presepuesto de este año en el hospital");
let gine = 40/100;
let trau = 30/100;
let pedi = 30/100;
let resg = parseInt(presupuesto*gine);
let rest = parseInt(presupuesto*trau);
let resp = parseInt(presupuesto*pedi);
alert("el presupuesto del hopital queda dividido de la siguiente manera: $" +resg+ " en el area de ginecología,$" +rest+ " en el area de traumatología y $" +resp+ " en el area de pediatría.");*/

/* Ejercicio 8 - El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%. REPETIDOOOO*/

/* Ejercicio 9 - Tres personas deciden invertir su dinero para fundar una empresa. Cada una de
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte
con respecto a la cantidad total invertida.*/

let name1 =prompt ("ingrese el nombre del inversor");
let inv1 =prompt ("Cantidad de inversion");
let name2 =prompt ("ingrese el nombre del inversor");
let inv2 =prompt ("Cantidad de inversion");
let name3 =prompt ("ingrese el nombre del inversor");
let inv3 =prompt ("Cantidad de inversion");
let porc =parseInt(inv1)+parseInt(inv2)+parseInt(inv3);   
let proc1 =parseInt(inv1/porc)*100; 
let proc2 =parseInt(inv2/porc)*100;
let proc3 =parseInt(inv3/porc)*100;      

alert("En el proceso de fundar la empres, "+name1+" invirtio $"+inv1+" lo cual le dio el "+proc1+"% de la empresa,"
+name2+" invirtio $"+inv2+" lo cual le dio el "+proc2+"% de la empresa y "+name3+" invirtio $"+inv3+" lo cual le dio el "+proc3+"% de la empresa." )




/* Ejercicio 10 - Realizar una calculadora con las operaciones básicas suma, división,
multiplicación y división.*/

