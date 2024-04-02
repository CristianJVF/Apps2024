let span = document.querySelector(".precio")
document.querySelectorAll('input[type="radio"]').forEach(element => {
    element.addEventListener("click", () => {
        document.querySelectorAll('input[type="radio"]:checked').forEach(element => {
            if (element.value == "2") span.innerHTML = 600;
            else if (element.value == "4") span.innerHTML = 900;
        });
    })
})