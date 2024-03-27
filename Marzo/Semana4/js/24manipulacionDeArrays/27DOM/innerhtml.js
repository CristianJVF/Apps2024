

document.querySelector(".red").addEventListener("mouseover", (event) => {
    document.querySelector(".texto").innerHTML = "has hecho mouse over sobre la capa 1"
});

document.querySelector("#number").addEventListener("input", (event) => {
    const n = event.target.value
    let txt = ""
    for (let i = 0; i < n; i++) {
        txt += "cositas guays"
    }
    txt = document.querySelector("#inyectar").innerHTML = txt
});

let counter = ""
for (let i = 0; i < 10; i++) {
    const nRandomleft = Math.floor(Math.random() * 725) + 1;
    const nRandomTop = Math.floor(Math.random() * 483) + 1;
    counter += '<img src="img/goldcoin.png" style="width:50px;position:absolute; margin-left:' + nRandomleft + 'px; margin-top:' + nRandomTop + 'px"></img>'
}

document.querySelector("#fondo").innerHTML = counter
