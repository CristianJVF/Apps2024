// // Ejercicio 2 Calcular número secreto

// const n = Math.floor(Math.random() * 5) + 1;

// alert(n);
// const num = Number(prompt("introduce un número"));

// if (n !== num) {
//     alert("error")
// } else {
//     alert("bien")
// };

// Calcular numero secreto con 3 oportunidades

// Calcular letra DNI

// const text = prompt("Introduce tu DNI");
// const letra = (a) => {
//     if (Number(a) && a.length === 8) {
//         const resto = a % 23
//         const letraDNI = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//         const DNI = letraDNI.charAt(resto);
//         alert(a + DNI)
//     } else {
//         alert("Introduce solo 8 números")
//     }
// }

// letra(text)

// Ejercicio 5

// const numNoches = prompt('numero de noches');
// const destino = prompt('destino');

// const costeHotel = (a) => a * 140;

// const costeAvion = (a, b) => {
//     if (a === "Oviedo" && b <= 3) {
//         return 15
//     } else if (a === "Oviedo" && b > 3) {
//         return 15 * 0.9
//     }
// }

// const costeAlquilerCoche = (a) => {
//     const num = a * 40
//     if (a > 7) num -= 50;
//     else if (a > 3) num -= 20;
//     return num;
// }

// const resultado1 = Number(costeHotel(numNoches));
// const resultado2 = Number(costeAvion(destino, numNoches));
// const resultado3 = Number(costeAlquilerCoche(numNoches));

// console.log("Coste hotel: " + resultado1);
// console.log("Coste viaje: ", resultado2);
// console.log("Coste alquiler coche: ", resultado3);
// console.log("Total:", resultado1 + resultado2 + resultado3);

// Ejercicio 6
// Declaramos una constante boleana, While crea un bucle mientas la sentencia entre parentesis sea verdadera

// const isAlive = true

// while (isAlive) {
//     const n = Math.floor(Math.random() * 2) + 1;
//     const elige = prompt("Entras en una mazmorra, elige una puerta");
//     if (n === Number(elige)) {
//         alert("has escogido bien")
//     } else {
//         alert("Estas muerto")
//         isAlive = false;
//     }
// }

// ejercicio 7

const real = true;

while (real) {
    const nombre = prompt("Introduzca su nombre")
    const valido = /\d/.test((nombre))
    console.log(valido)
    if (valido == true) {
        const nombreReal = prompt("Es tu nombre real?")
        if (nombreReal) {
            alert("ok, perfecto")
            real = false;
        } else {
            alert("vuelve a empezar")
        }
    } else {
        alert("introduce solo letras")

    }
}