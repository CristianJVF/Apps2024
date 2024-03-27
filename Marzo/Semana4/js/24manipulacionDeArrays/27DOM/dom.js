const convertir = () => {
    const euros = document.querySelector('#euros').value;
    document.querySelector('#dolares').value = euros * 2
}

const calcular = () => {
    const temperatura = document.querySelector('#centigrados').value;
    document.querySelector('#farenheit').value = (temperatura * 9 / 5) + 32;
}

document.querySelector("#convertir").addEventListener("click", convertir)
document.querySelector("#calcular").addEventListener("click", calcular)

const concatenar = () => {
    const name = document.querySelector('#name').value;
    const material = document.querySelector('#select').value;
    const tamaño = document.querySelector('.radio:checked').value;
    const comentario = document.querySelector('#coment').value;
    document.querySelector('#resultado').value = name + "ha pedido una caja de " + material + " con dimensiones " + tamaño + " " + comentario
}

document.querySelector("#concat").addEventListener("click", concatenar)

const numeroAleatorio = Math.floor(Math.random() * 5) + 1;
console.log(numeroAleatorio)

const adivina = () => {
    const numero = document.querySelector("#numero").value
    if (numero == numeroAleatorio) document.querySelector("#txt").value = "has acertado";
    else document.querySelector("#txt").value = "intentalo de nuevo";
}

document.querySelector("#evaluar").addEventListener("click", adivina)

// ejercicio 5 coste viaje

const calculateHotelCost = a => a * 140;

const calculateAirplaneCost = (noches, destino) => {
    let destinos = {
        Tokio: 700,
        Oviedo: 15,
        Madrid: 90,
        Barcelona: 90
    }
    let cost = noches * destinos[destino]
    if (noches > 3) cost *= 0.9
    return cost
}
calculateRentingCarCost = (n) => {
    let cost = 40 * n;
    if (n >= 7) cost -= 50;
    else if (n >= 3) cost -= 20;
    return cost
}

const calculateCost = () => {
    const numNights = document.querySelector("#numNights").value;
    const destiny = document.querySelector("#destiny").value;
    const hotelCost = calculateHotelCost(numNights);
    const tripCost = calculateAirplaneCost(numNights, destiny);
    const carCost = calculateRentingCarCost(numNights);
    document.querySelector("#hotelCost").value = hotelCost;
    document.querySelector("#viaje").value = tripCost;
    document.querySelector("#coche").value = carCost;
}

document.querySelector("#calcularCoste").addEventListener("click", calculateCost)

