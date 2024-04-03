let span = document.querySelector(".precio")
let cost = 300


document.querySelectorAll('input[type="radio"]').forEach(element => {
    element.addEventListener("click", () => {
        span.innerHTML = cost
        document.querySelectorAll('input[type="radio"]:checked').forEach(element => {
            if (element.value == "300") span.innerHTML = cost + 600;
            else if (element.value == "600") span.innerHTML = cost + 900;
            else if (element.value == "400") span.innerHTML = cost + 400;
        });
    })
})