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

const calculateCost = () => {
    const numNights = document.querySelector("#numNights").value;
    const hotelCost = calculateHotelCost(numNights);
    document.querySelector("#hotelCost").value = hotelCost;
}

const calculateHotelCost = () => {

}
const calculateAirplaneCost = () => {

}
calculateRentingCarCost = () => {

}