// 14 Repaso
// Ejecicio 4

// const obtenerLetra = (numero) => {
//     const textToNumber = Number(numero)
//     const resto = textToNumber % 23
//     const letra = "QWERTYUIOPLKJHGFDSAZXCVBNM";
//     if (textToNumber && numero.length == 8) alert(textToNumber + letra.charAt(resto))
//     else alert("nop")
// }

// const NumPlusLetter = obtenerLetra(prompt("Introduzca su DNI sin letra"));

//Ejercicio 5

const numNoches = prompt('numero de noches');
const destino = prompt('destino');

const costeHotel = (noches) => noches * 140;
const costeAvion = (destino, noches) => {
    let coste
    if (destino === "Oviedo") coste = 15;
    else if (destino === "Tokio") coste = 700;
    else if (destino === "Madrid" || destino === "Barcelona") coste = 90;
    if (noches > 3) coste *= 0.9
    return coste
}

const costeAlquilerCoche = (noches) => {
    let coche = 40 * noches
    if (noches >= 7) coche -= 50;
    else if (Number(noches) >= 3) coche -= 20;
    return coche
}


const resultado1 = Number(costeHotel(numNoches));
const resultado2 = Number(costeAvion(destino, numNoches));
const resultado3 = Number(costeAlquilerCoche(numNoches));
console.log("Coste hotel: " + resultado1);
console.log("Coste viaje: ", resultado2);
console.log("Coste alquiler coche: ", resultado3);
console.log("Total:", resultado1 + resultado2 + resultado3); 
