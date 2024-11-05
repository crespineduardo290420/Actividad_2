/**Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:  
• La cantidad de valores negativos ingresados. 
• La cantidad de valores positivos ingresados. 
• La cantidad de múltiplos de 15. 
• El valor acumulado de los números ingresados que son pares.  */


function procesarValores() {
    let cantidadNegativos = 0;
    let cantidadPositivos = 0;
    let cantidadMultiplosDe15 = 0;
    let acumuladoPares = 0;

    for (let i = 0; i < 510; i++) {
        const valor = parseInt(prompt(`Ingrese el valor #${i + 1}:`));

        // Verificar si el valor es negativo o positivo
        if (valor < 0) {
            cantidadNegativos++;
        } else if (valor > 0) {
            cantidadPositivos++;
        }

        // Verificar si el valor es múltiplo de 15
        if (valor % 15 === 0) {
            cantidadMultiplosDe15++;
        }

        // Acumular los valores pares
        if (valor % 2 === 0) {
            acumuladoPares += valor;
        }
    }

    console.log("Cantidad de valores negativos:", cantidadNegativos);
    console.log("Cantidad de valores positivos:", cantidadPositivos);
    console.log("Cantidad de múltiplos de 15:", cantidadMultiplosDe15);
    console.log("Acumulado de números pares:", acumuladoPares);
}

// Llamar a la función para ejecutarla
// dependiendo de la cantidad ingresada, se repetira el bucle
procesarValores();
