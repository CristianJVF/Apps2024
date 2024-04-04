const array = ["sol", "nube", "fuego"];
let word = array[Math.floor(Math.random() * array.length)];
const button = document.querySelector("button")


function secretWord() {
    replaceWord = word.replace(/./g, "_ ");
    let pBox = document.querySelector('p');
    pBox.innerHTML = replaceWord;
}

const replaceAt = (str, character, index) => {
    return str.substring(0, index) + character + str.substring(index + character.length);
}

secretWord()

const printLeter = (letra) => {
    let position = word.indexOf(letra)
    console.log(position)
    let intento = word[position];
    let guiones = document.querySelector("p");
    let hiddenWord = replaceAt(guiones.textContent, intento, position * 2)
    guiones.innerHTML = hiddenWord;
}


button.addEventListener("click", () => {
    const letra = document.querySelector("input").value;
    printLeter(letra)
})

