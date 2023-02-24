window.addEventListener("load", init)

function init() {
    const etelek = ["etel1", "etel2", "etel3", "etel4"]
    etlkiir(etelek)
    articlekepek(etelek)
}

function etlkiir(etelek) {
    const tartalomElem = document.getElementById("tartalom")
    tartalomElem.innerHTML = "<ul id='etellista'></ul>"
    const eteltartalom = document.getElementById("etellista")
    for (let i = 0; i < etelek.length; i++) {
        eteltartalom.innerHTML += "<li>" + etelek[i] + "</li>"
    }
}

function articlekepek(etelek) {
    const article = document.createElement("article");
    for (let i = 0; i < etelek.length; i++) {
        const div1 = document.createElement("div");
        const img1 = document.createElement("img");
        img1.src = "kepek/kep1.jpg";
        div1.appendChild(img1);
        article.appendChild(div1);
    }
    document.body.appendChild(article);
}