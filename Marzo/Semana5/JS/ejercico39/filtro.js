const container = document.querySelector(".container")
let acumulador = ""

for (let i = 0; i < 300; i++) {
    let num = Math.floor(Math.random() * 2)
    num == 0 ? color = "orange" : color = "green"
    acumulador += '<div class=' + color + '></div>'
}
container.innerHTML = acumulador
const oranges = documnet.querySelectorAll(".orange")
document.querySelectorAll("a").forEach(element => {
    element.addEventListener("click", () => {
        element == "orange" ? 
    })
});