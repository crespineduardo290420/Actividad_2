/** Crear una función que determine la nota final de un alumno, la cual depende 
de lo siguiente:  
• Examen =20% 
• tareas = 40% 
• asistencia = 10% 
• investigación = 30%  */

function notafinal(examen, tarea, asistencia, investigacion) {
    return (examen * 0.2) + (tarea * 0.4) + (asistencia * 0.1) + (investigacion * 0.3)
}

//ingreso de las notas
let examen = 10;
let tarea = 8;
let asistencia = 10;
let investigacion = 9;
let nombre = "Luis";
let carnet = "1234";

console.log("La nota final del alumno " + nombre +" " + "con numero de carnet " + carnet + " " + "es :" + notafinal(examen, tarea, asistencia, investigacion));