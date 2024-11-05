/**Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado 
por el usuario.  */

function mostrarTablaMultiplicar() {
    const numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Llamar a la función para ejecutarla
mostrarTablaMultiplicar();
