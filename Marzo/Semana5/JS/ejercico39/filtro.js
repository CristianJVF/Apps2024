const container = document.querySelector(".container")
let acumulador = "";

for (let i = 0; i < 300; i++) {
    let num = Math.floor(Math.random() * 2)
    num == 0 ? color = "orange" : color = "green"
    acumulador += '<div class=' + color + '></div>'
}
container.innerHTML = acumulador
const oranges = document.querySelectorAll(".orange")
const green = document.querySelectorAll(".green")
let cont = 0;
document.querySelectorAll("a").forEach(element => {
    cont = cont + oranges.length
    element.addEventListener("click", (color) => {
        if (color.target.innerHTML == "orange") {
            oranges.forEach(elem => { elem.classList.remove('invisible'); })
            green.forEach(elem => { elem.classList.add('invisible'); })
        } else if (color.target.innerHTML == "green") {
            green.forEach(elem => { elem.classList.remove('invisible'); })
            oranges.forEach(elem => { elem.classList.add('invisible'); })
        } else if (color.target.innerHTML == "todos") {
            oranges.forEach(elem => { elem.classList.remove('invisible'); })
            green.forEach(elem => { elem.classList.remove('invisible'); })
        }

    })

})