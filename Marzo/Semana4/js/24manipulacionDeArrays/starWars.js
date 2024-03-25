let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];

const getWomansName = () => {
    const r = characters.filter(n => n.gender == "female").map(e => e.name)
    return r
}

const getSmallerPeople = () => {
    const r = characters.map(e => e.height - 10);
    return r
}

const sumaDePeso = () => {
    const r = characters.map(n => n.mass).reduce((acc, n) => Number(acc) + Number(n), 0);
    return r
}

const mediaDeAltura = () => {
    const r = characters.map(n => n.height)
    const re = r.reduce((acc, n) => Number(acc) + Number(n), 0) / r.length;
    return re;
}

const collectByIndex = (index) => {
    const r = characters.filter(n => n.name == index)
    return r
}

fetch('https://swapi.py4e.com/api/people')
    .then(res => res.json())
    .then(data => {
        characters = data.results;
        // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
        console.log(getWomansName());
        console.log(getSmallerPeople());
        console.log(sumaDePeso());
        console.log(mediaDeAltura());
        console.log(collectByIndex("C-3PO"));
    });