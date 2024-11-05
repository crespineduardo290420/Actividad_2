/** Se cuenta con la siguiente información:  
• Las edades de 5 estudiantes del turno mañana.  
• Las edades de 6 estudiantes del turno tarde.  
• Las edades de 11 estudiantes del turno noche.  
Nota: Las edades de cada estudiante se deberán ingresar por la web.  
Lo que queremos devolver: 
• Obtener el promedio de las edades de cada turno (tres promedios). 
• Imprimir dichos promedios (promedio de cada turno). 
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un 
promedio de edades mayor.*/

function obtenerPromedioEdades(edades) {
    const suma = edades.reduce((total, edad) => total + edad, 0);
    return suma / edades.length;
}

function ingresarEdades(cantidad, turno) {
    let edades = [];
    for (let i = 0; i < cantidad; i++) {
        const edad = parseInt(prompt(`Ingrese la edad del estudiante #${i + 1} del turno ${turno}:`));
        edades.push(edad);
    }
    return edades;
}

function calcularPromediosYMostrar() {
    const edadesManana = ingresarEdades(5, "mañana");
    const edadesTarde = ingresarEdades(6, "tarde");
    const edadesNoche = ingresarEdades(11, "noche");

    const promedioManana = obtenerPromedioEdades(edadesManana);
    const promedioTarde = obtenerPromedioEdades(edadesTarde);
    const promedioNoche = obtenerPromedioEdades(edadesNoche);

    console.log(`Promedio de edades - Turno Mañana: ${promedioManana.toFixed(2)}`);
    console.log(`Promedio de edades - Turno Tarde: ${promedioTarde.toFixed(2)}`);
    console.log(`Promedio de edades - Turno Noche: ${promedioNoche.toFixed(2)}`);

    // Determinar el turno con el promedio mayor
    let turnoMayor = "mañana";
    let promedioMayor = promedioManana;

    if (promedioTarde > promedioMayor) {
        turnoMayor = "tarde";
        promedioMayor = promedioTarde;
    }
    if (promedioNoche > promedioMayor) {
        turnoMayor = "noche";
        promedioMayor = promedioNoche;
    }

    console.log(`El turno con el promedio de edades mayor es el turno ${turnoMayor}, con un promedio de ${promedioMayor.toFixed(2)}.`);
}

// Ejecutar el programa
calcularPromediosYMostrar();
