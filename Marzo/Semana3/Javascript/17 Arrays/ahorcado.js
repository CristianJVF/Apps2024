const array = ["pelota", "perro", "gato", "calor"];
const n = Math.floor(Math.random() * 4) + 1;

const select = (a) => {
    let palabra = array[a - 1]
    return palabra
}

let secretWord = select(n)
let hiddenWord = secretWord.replace(/./g, "_ ");
let escribe = alert("adivina la siguiente palabra " + hiddenWord);

const pintarLetra = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length)
}


const adivina = () => {
    const letra = prompt("introduce una letra")
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] == letra) console.log(pintarLetra(hiddenWord, letra, i));
    }
}

adivina();
