function mostrarValor(valor) {
    console.log(valor ? "si es cierto" : "No es falso")
    // if (valor === 0) {
    //     console.log("Si es eso cierto")
    // } else if (valor === 1) {             
    //     console.log("No es cierto")
    // }
}

mostrarValor();

function quieroComer(comida) {
    console.log(`${"Hoy quiero comer"} ${comida}`)
}

quieroComer("Garbanzos");

function calcularCubo(cubo) {
    console.log(cubo ** 3)
}

calcularCubo(3);

function calcularVelocidad(velocidad) {
    console.log(`${velocidad * 1000} ${"m/h"}`)
}

calcularVelocidad(3)

function calcularArea(alto, ancho) {
    console.log(alto * ancho)
}

calcularArea(5, 4);

function trianguloarea(alto, ancho) {
    let triangulo = alto * ancho / 2
    console.log(triangulo)
}

trianguloarea(3, 6)

function calculaperimetro(radio) {
    console.log(2 * Math.PI * radio)
}

calculaperimetro(7)

function calculaArea(radio2) {
    console.log(Math.PI * radio2)
}

calculaArea(7)