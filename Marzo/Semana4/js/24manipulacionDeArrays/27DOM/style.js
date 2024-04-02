<<<<<<< HEAD
const txt = document.querySelector(".a");


document.querySelector("#ver").addEventListener("click", () => {
    document.querySelector(".a").style.backgroundColor = 'red';
    document.querySelector(".b").style.backgroundColor = 'red';
    document.querySelector(".c").style.backgroundColor = 'red';
=======

document.querySelector("#ver").addEventListener("click", () => {
    document.querySelector(".a").style.backgroundColor = "red";
})

document.querySelector('#pulsa').addEventListener("click", () => {
    document.querySelector('#lightboxContainer').style.display = 'block';
})

document.querySelector('#ocultar').addEventListener("click", () => {
    document.querySelector('#lightboxContainer').style.display = 'none';
})

let counter = 1

document.querySelector('#sgte').addEventListener("click", () => {
    let margin = -512 * counter
    document.querySelector('.slider').style.marginLeft = margin + "px";
    document.querySelector('.slider').style.transition = "1s";
    counter++
    if (counter == 3) {
        counter = 0
    }
})

const obj = document.querySelector(".box");
document.querySelector('#rebota').addEventListener("click", () => {
    obj.classList.add('animate__animated', 'animate__rubberBand');
})

obj.addEventListener('animationend', () => {
    obj.classList.remove('animate__animated', 'animate__rubberBand');
});

document.querySelector(".clickBurguer").addEventListener("click", () => {
    document.querySelector(".burguer").classList.toggle("desplegableON")
>>>>>>> 6565d65b70c80464c66c96b22d1a297ff43bec21
})