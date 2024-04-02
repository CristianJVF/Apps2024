
let foto1;
foto1 = !foto1
const pinguin = document.querySelector("#pinguin");

pinguin.addEventListener("click", () => {
    if (foto1) {
        pinguin.setAttribute("src", "/Marzo/Semana4/js/24manipulacionDeArrays/27DOM/tuxes/PinguLinux_Goku.png")
        foto1 = !foto1
    } else {
        pinguin.setAttribute("src", "/Marzo/Semana4/js/24manipulacionDeArrays/27DOM/tuxes/PinguLinux_Batman.png")
        foto1 = !foto1
    }
})

const red = document.querySelectorAll(".red");

document.querySelector("#soluciones").addEventListener("click", () => {
    red.forEach(element => {
        element.style.backgroundColor = "red"
    })
});

const inputs = document.querySelectorAll("input[type='number']");
let acumula = 0;
document.querySelector("#sumar").addEventListener("click", () => {
    inputs.forEach(element => {
        acumula += Number(element.value);
        document.querySelector("#resultado").innerHTML = acumula;
    })
})

document.querySelector("#comprobar").addEventListener("click", () => {
    document.querySelectorAll('input[type="radio"]:checked').forEach(element => {
        console.log(element.classList.value)
        if (element.classList.value == "wrong") element.closest("p").style.backgroundColor = "red"
        else if (element.classList.value == "rigth") element.closest("p").style.backgroundColor = "green"
    })
})

