/**  Realizar una función para una tienda de coches en donde se deberá calcular: 
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el 
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE 
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se 
aplicara en base a lo que selecciono el usuario. 
*/


function calcularDescuento() {
    const modelo = document.getElementById("modelo").value;
    let descuento;

    if (modelo === "FIESTA") {
        descuento = 5;
    } else if (modelo === "FOCUS") {
        descuento = 10;
    } else if (modelo === "ESCAPE") {
        descuento = 20;
    } else {
        descuento = 0;
    }

    // Mostrar el resultado en HTML
    document.getElementById("resultado").innerHTML = `
        <h2>Resultado:</h2>
        <p>Coche seleccionado: Ford ${modelo}</p>
        <p>Descuento aplicado: ${descuento}%</p>
    `;
}