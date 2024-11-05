/** Crear una función que en base a la edad que ingreso el usuario devolver un 
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.  */

function mayoredad(edad){
    return edad >= 18 ? "La persona es mayor de edad" : "La persona no es mayor de edad";
}

//cambiar numero para verificar la condicion
console.log(mayoredad(20));
