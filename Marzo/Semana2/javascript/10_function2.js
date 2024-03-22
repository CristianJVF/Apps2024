function echo(params) {
    return params;
}

const valor = echo("Greta")
console.log(valor)

function saludar(saludo) {
    let saludoCompleto = "hola " + saludo;
    return saludoCompleto
}

const saludoReturn = saludar("Grace")
console.log(saludoReturn);

// Ejercicio 6

function test(val) {
    if (val >= 10 && val <= 20) { // Cambia esta línea
        return "Inside";
    } else {
        return "Outside";
    }
}

const valReturn = test(2);
console.log(valReturn);

// Ejercicio 7

function testEqual(val) {
    if (val === 12) { // Cambia esta línea
        return "Equal";
    }
    return "Not Equal";
}

const testEqualReturn = testEqual(12);
console.log(testEqualReturn)

// Ejercicio 8

function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "Mayor que 5";
    } else if (val <= 5) {
        result = "Menor o igual a 5";
    }
    return result;
}

const testElseReturn = testElse(4);
console.log(testElseReturn);

// Ejercicio 9

function testIfElse(val) {
    let result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else if (val < 5) {
        result = "Smaller than 5";
    } else {
        result = "Equal to 5";
    }
    return result;
}

const testIfElseReturn = testIfElse();
console.log(testIfElseReturn);

// Ejercicio 12

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge";
    }
    return "nothing"
}

const x = testSize();
console.log(x);

function nand(true, false) {
    if (true == "true" && false == "false") {
        return "false"
    } else {
        return "true"
    }
}

const y = nand()
console.log(y)