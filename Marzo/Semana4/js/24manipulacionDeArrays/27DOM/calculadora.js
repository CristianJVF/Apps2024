
const calcularOperacion = () => {
    const n1 = Number(document.querySelector("#n1").value);
    const n2 = Number(document.querySelector("#n2").value);
    const op = document.querySelector("#op").value;
    let r
    if (op == "+") {
        r = n1 + n2
    } else if (op == "*") {
        r = n1 * n2
    } else if (op == "-") {
        r = n1 - n2
    } else if (op == "/") {
        r = n1 / n2
    }
    document.querySelector("#result").value = r
}

document.querySelector("#calcular").addEventListener("click", calcularOperacion);

let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]

// o 

const calcularLetra = () => {
    const dni = Number(document.querySelector("#dni").value);
    const r = dni % 23;
    document.querySelector("#letra").value = letras[r]
}


document.querySelector("#imprime").addEventListener("click", calcularLetra)