const array = ["jose", "pedro", "juan"];

const nuevoArray = array.map(array => "conozco a " + array);
console.log(nuevoArray)

// ejercicio 1

const miPerro = {
    "piernas": 3,
    "cola": 1,
    "amigos": 5
}
const a = "amigos"
console.log(miPerro.piernas, miPerro.cola, miPerro[a])

// ejercico 2

const test = {
    "ojos": 2,
    "nombre": "Pablo",
    "piernas": 2
};

// Sólo hay que hacer modificaciones por debajo de esta línea 
const ojos = test.ojos;      // Cambiar esta línea
const nombre = test.nombre;    // Cambia esta línea

console.log(ojos); // Debería mostrar: 2
console.log(nombre); // Debería mostrar: "Pablo"

// ejercicio 3

const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 19;
const player = testObj[playerNumber];   // Cambia esta línea

console.log(player); // Debería mostrar: "Unitas"

// ejercicio 4

const myDog = {
    "nombre": "Coder",
    "piernas": 4,
    "colas": 1,
};

// Modifica esta línea con el código necesario
console.log(myDog.nombre = "happyCoder"); // Debería mostrar: "HappyCoder"

// ejercicio 5 

function phoneticLookup(val) {
    let result = "";

    // Sólo cambia el código por debajo de esta línea

    const lookUp = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }

    // Sólo cambia el código por encima de esta línea
    return result = lookUp.charlie;
}

const value = phoneticLookup("charlie")
console.log(value); // Chicago

// ejercicio 6 

const myMusic = [
    {
        "artista": "Shakira",
        "titulo": "Piano Man",
        "formatos": [
            "CD",
            "8T",
            "LP"
        ],
        "premios": true
    },
    {
        "artista": "Michael Jackson",
        "titulo": "beat it",
        "formatos": [
            "CD",
            "cassette"
        ],
        "premios": true
    }
];

console.log(myMusic[1].artista);
console.log(myMusic[1].formatos[1]);

// ejercicio 7

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"]; // Cambia esta línea
console.log(gloveBoxContents); // Debería valer: "maps"

// ejercicio 8

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list;
console.log(secondTree); // Debería mostrar: ["fir", "pine", "birch"]