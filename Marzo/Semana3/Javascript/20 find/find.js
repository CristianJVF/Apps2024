const users = [
    {
        "name": "Paco",
        "isActive": false,
        "age": 18
    },
    {
        "name": "Laura",
        "isActive": false,
        "age": 21
    },
    {
        "name": "Raquel",
        "isActive": false,
        "age": 15
    },
    {
        "name": "Juan",
        "isActive": true,
        "age": 17
    },
    {
        "name": "Alberto",
        "isActive": false,
        "age": 50
    },
    {
        "name": "Rodolfo",
        "isActive": true,
        "age": 7
    },
];

const choosedUser = users.find(u => u.name === "Juan").age // Modifica esta línea para resolver el ejercicio

console.log(choosedUser); // Debería mostrar: 17

console.log(users[0].age)
const jovenes = users.filter(num => num.isActive);
const edad = users.filter(num => num.age > 18);

console.log(jovenes)
console.log(edad)

const array = [1, 2, 3];
const media = array.reduce((acc, e) => acc + e, 0) / array.length
console.log(media) 