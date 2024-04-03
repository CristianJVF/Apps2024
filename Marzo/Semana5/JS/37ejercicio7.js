let trs = document.querySelectorAll("tr")

trs.forEach(element => {
    element.addEventListener("click", () => {
        trs.forEach(element => {
            element.style.backgroundColor = "transparent"
        });
        element.style.backgroundColor = "red"
        element.querySelector("input[type=radio]").checked = true
    })
});