// Ejercicio 1

const array = ["juan", "pedro", "jonh", "jose", "calos"];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log("conozco a alguien que se llama " + element);
}

// Ejercicio 2

const array2 = []

const toArray = (a, b) => {
    array2.push(a, b)
    console.log(array2)
}

toArray(4, 9);

// Ejercicio 3

const numbers = [1, 9, 3, 8, 5, 7];

for (let i = 0; i < numbers.length; i++) {
    const r = numbers[i];
    console.log(r)
    console.log([r] * 2);
}

// Ejercicio 4

const getFirstElement = (a) => {
    const r = a[1]
    console.log(r)
}

getFirstElement([1, 2, 3, 4])

// Ejercicio 5

const setFirstElement = (a, b) => {
    const array3 = a
    array3.splice(0, 1)
    console.log(array3)
    const r = array3.unshift(b)
    console.log(array3)
}

setFirstElement(["a", "b", "c"], "i")

// Ejercicio 6

const getLastElement = (a) => {
    const r = a[a.length - 1];
    console.log(r);
}

getLastElement([4, 6, 6, 0, 4, 8])

// Ejercicio 7 // Ejercicio 8

const arr = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
let positivos = 0;
let sumaNegativos = 0;
let negativos = 0;
let sumaPositivos = 0;
let ceros = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positivos++, sumaPositivos += arr[i];
    else if (arr[i] < 0) negativos++, sumaNegativos += arr[i];
    else if (arr[i] == 0) ceros++
}
console.log(positivos);
console.log(negativos);
console.log(ceros);

console.log(sumaNegativos / negativos);
console.log(sumaPositivos / positivos);



