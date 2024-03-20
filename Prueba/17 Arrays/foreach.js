// ejercicio 1

const array = ["juan", "pedro", "jose", "Jesus", "maria"];

array.forEach(a => console.log("conozco a alguien llamado " + a))

// ejercicio 2

const numbers = [1, 9, 3, 8, 5, 7]

numbers.forEach(a => console.log(a * 2))

// ejercicio 3 y ejercicio 4

const arr = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let positivos = 0;
let sumaPositivos = 0;
let negativos = 0;
let sumaNegativos = 0;
let ceros = 0;

arr.forEach(a => {
    if (a > 0) positivos++, sumaPositivos += a;
    else if (a < 0) negativos++, sumaNegativos += a;
    else if (a == 0) ceros++
})

console.log(positivos + " --- " + negativos + " --- " + ceros);
console.log(sumaPositivos + " --- " + sumaNegativos)

// ejercicio 5

let haGanadoAlguien = true
const board = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
const printBoard = () => {
    alert(board[0] + "|" + board[1] + "|" + board[2] + "\n" + board[3] + "|" + board[4] + "|" + board[5] + "\n" + board[6] + "|" + board[7] + "|" + board[8]);
}
const again = () => {
    const r = prompt("casilla ya jugada, prueba otra vez")
    return r;
}

while (haGanadoAlguien) {
    printBoard()
    const jugada = prompt("jugador 1 has tu jugada");
    if (board[jugada] == "_") board.forEach(() => board[jugada] = "X");
    else {
        let otraVez = true
        while (otraVez) {
            const rt = again()
            if (board[rt] == "_") board.forEach(() => board[rt] = "X"), otraVez = false
            else otraVez = true
        }
    }
    // if (board.forEach() === "-") haGanadoAlguien = false;
    const jugadaDos = prompt("jugador 2 has tu jugada")
    if (board[jugadaDos] == "_") board.forEach(() => board[jugadaDos] = "O");
    else {
        let otraVez = true
        while (otraVez) {
            const rt = again()
            if (board[rt] == "_") board.forEach(() => board[rt] = "X"), otraVez = false
            else otraVez = true
        }
    }
}
// if (board.forEach() === "-") haGanadoAlguien = false;