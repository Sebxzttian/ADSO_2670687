/*ejercicio 2 - dado el sueldo de un empleado imprimir en una alerta el nuevo sueldo del empleado si tuvo un aumento del 10%

let sueldo = prompt("Ingrese el valor del suedo")
let psueldo = 10/100;
let nsueldo = parseInt(sueldo) + parseInt(sueldo*psueldo)

alert("El nuevo sueldo con el aumento es: $" +nsueldo+ "COP") */

/*ejercicio 3 - un vendedor que tiene su sueldo base recive una comision del 30% del total de las ventas del mes, el quiere saver cuanto ganara en un mes que tuvo 3 ventas*/
let sueldo = prompt("Ingrese el valor del suedo");
let venta1 = prompt("Ingrese el valor de la venta");
let venta2 = prompt("Ingrese el valor de la venta");
let venta3 = prompt("Ingrese el valor de la venta");
let porc = 30/100;
let comision = parseInt(venta1)+ parseInt(venta2)+ parseInt(venta3);
let resul = parseInt(sueldo) + parseInt(comision*porc);
let resulf = parseInt(resul); 

alert("Su sueldo junto a la comision por las 3 ventas es de $" +resulf+ " COP");