document.querySelectorAll("input[type=radio").forEach(element => {
    element.addEventListener("click", (input) => {
        let txt = " ";
        document.querySelectorAll("input[type=radio]:checked").forEach(elementchecked => {
            txt += elementchecked.closest("label").textContent
        });
        document.querySelector("p").textContent = txt
    });
})

