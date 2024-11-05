/** Crear una función que en base a 2 números enteros que ingrese el usuario, 
calcular cual número es el mayor y devolverlo.   */

function numeroMayor(num1, num2){

    

    if (num1 > num2){
        console.log("Este numero es mayor: " + num1);
    } else if (num2 > num1) {
        console.log("Este numero es mayor: " + num2);
    } else {
        console.log("Los numeros son iguales.");
    }
    
}

let num1 = 100;
let num2 = 7;

console.log(numeroMayor(num1,num2));
