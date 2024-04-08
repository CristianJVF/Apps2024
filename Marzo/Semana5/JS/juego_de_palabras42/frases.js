const frases = ["El hábito no hace al monje", "Una golondrina no hace verano", "Poco a poco, se anda lejos", "Haz bien y no mires a quién"]

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

let n = Math.floor(Math.random() * 4)
let frase = frases[n]
let frasesplit = frase.split(' ')
shuffle(frasesplit)

const divUnordered = document.querySelector("#unordered")
let acumulador = ""
for (let i = 0; i < frasesplit.length; i++) {
    acumulador += '<span type="button">' + frasesplit[i] + '</span> '
}
divUnordered.innerHTML = acumulador
const divResultado = document.querySelector("#resultado")
let resultadoAcumulado = ""

document.querySelectorAll("span").forEach(array => {
    array.addEventListener("click", (e) => {
        const r = e.target.innerHTML
        resultadoAcumulado += '<span>' + r + '</span> '
        divResultado.innerHTML = resultadoAcumulado
    })
});

const arrayReslutado = []

document.querySelector("button").addEventListener("click", () => {
    const resultado = document.querySelector("#resultado")
    resultado.querySelectorAll("span").forEach(element => {
        arrayReslutado.push(element.innerHTML)
    });
    if (arrayReslutado.join(" ") === frase) alert("bieeeen")
})




