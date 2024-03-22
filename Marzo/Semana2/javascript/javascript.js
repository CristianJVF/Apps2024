const txt1 = "Este es el principio";
const txt2 = "Este es el final"
console.log(`${txt1}${"..."}${txt2}`)
const euros = 8;
const dolares = euros * 2;
console.log(dolares)

const precio = 100;
const iva = precio * 1.21

console.log(iva)

const ancho = 70;
const alto = 60;
const area = (ancho * alto) / 2

console.log(area);

const centigrados = 20;
const fahrenheit = (centigrados * 9 / 5) + 32;

console.log(fahrenheit)

const nombre = 'Juan';
const material = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza estraña, indómita';

console.log(`${nombre} ${"ha perdido una caja de"}${material}${"con unas dimensiones"} ${dimensiones}${comentario}`)

let myVar = 87;
myVar++ // Modificar esta línea
console.log(myVar); // 88

const dato1 = 10;
const dato2 = 10;
if (dato1 === dato2) {
    console.log('exito');
}

if (10 == 10) {
    console.log('You got a true!')
} else {
    console.log('You got a false!')
}

const nota = 7;

if (nota < 5) {
    console.log("reprobado")
} else if (nota >= 5) {
    console.log("aprobado")
}

const i = 7;
if (i >= 0) {
    console.log("numero posittivo")
} else {
    console.log("nope")
}

if (i % 2 == 0) {
    console.log("el número es par")
} else {
    console.log("nope")
}

if (i % 5 == 0) {
    console.log("es multiplo de 5")
} else {
    console.log("nope")
}

if (i >= 100) {
    console.log("número mayor a 100")
} else {
    console.log("nope")
}



