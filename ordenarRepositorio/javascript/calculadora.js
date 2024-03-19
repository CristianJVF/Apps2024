const n1 = 5;
const n2 = 8;
const op = "-";

if (op == "*") {
    console.log(n1 * n2)
} else if (op == "+") {
    console.log(n1 + n2)
} else if (op == "/") {
    console.log(n1 / n2)
} else if (op == "-") {
    console.log(n1 - n2)
} else {
    console.log("nope")
}


console.log(n1 > n2 ? "n1 es mayor que n2" : "n2 es mayor que n1");

const i = 6;
console.log(i >= 0 ? "i es mayor que 0" : "i es menor que 0");

const color = 'amarillo';
switch (color) {
    case 'rojo':
        console.log('Has escogido rojo');
        break;
    case 'azul':
        console.log('Has escogido azul');
        break;
    case 'amarillo':
        console.log('Has escogido amarillo');
        break;
    default:
        console.log('No has escogido ningún color de la lista!');
}


const golosina = 'nubes';

switch (golosina) {
    case 'chicle':
        console.log('Has escogido un chicle');
        break;
    case 'gominola':
        console.log('Has escogido una gominola');
        break;
    case 'regaliz':
        console.log('Has escogido un regaliz');
        break;
    default:
        console.log('No has escogido ningún dulce!');
}

for (let i = 0; i <= 50; i += 2) {
    console.log(i);
}

for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else {
        console.log(i)
    }
}

let sum = 0;
for (let i = 5; i >= 0; i--) {
    sum += i;
}
console.log(sum)

for (let i = 1; i <= 10; i++) {
    console.log(i * 7)
}

for (let e = 0; e <= 10; e++) {
    for (let i = 1; i <= 10; i++) {
        console.log(e * i)
    }
}


let valor = 0;
while (valor <= 5) {
    console.log(valor)
}
}


// https://github.com/monteserin/chat/tree/master chat con react