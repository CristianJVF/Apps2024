const table = document.querySelector("table")
let acumulador = "";
for (let i = 0; i < 3; i++) {
    acumulador += "<tr><td></td><td></td><td></td></tr>"
}
table.innerHTML = acumulador

let boolean = true
const tablero = document.querySelectorAll("td")
tablero.forEach(element => {
    element.addEventListener("click", () => {
        if (boolean) element.innerHTML = "X", boolean = false
        else if (!boolean) element.innerHTML = "O", boolean = true
        tablero.forEach(n => {
            const array = n.innerHTML
            console.log(array[1])
            // if (array[0] == "X" & array[1] == "X" & array[2] == "X") {
            //     console.log(true)
            // }
        })
    });
});
