let contador = 0;
const capas = document.querySelectorAll(".capa")

document.querySelector("a").addEventListener("click", () => {
    contador = contador < capas.length - 1 ? contador + 1 : 0
    const desp = contador * 350
    capas.forEach(element => {
        // element.classList.add('invisible')
        element.style.transform = "scale(0)";
        element.style.opacity = 0;
    });
    capas[contador].style.transform = "scale(1)";
    capas[contador].style.opacity = 1;
    // capas[contador].classList.add('visible')
    // capas[contador].classList.remove('.invisible')

    document.querySelector("#layers").style.marginLeft = -desp + "px"
})

