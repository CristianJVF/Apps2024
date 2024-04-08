const container = document.querySelector(".container")

fetch('https://api.mercadolibre.com/sites/MLA/search?q=celular', {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
    },
})
    .then(res => res.json())
    .then(res => {
        const data = res.results;
        console.log(data[0])
        container.innerHTML = data.map(producto => '<p>' + producto.title + '<br> <img src="' + producto.thumbnail + '" alt="#"><span>' + producto.seller.nickname + '</sapn> </p>').join(' ')
    });