

const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("open");

    if(nav.classList.contains("open")){
        menu.innerHTML = "&#10006;";
        menu.setAttribute("aria-label", "Fechar menu");
    }
    else{
        menu.innerHTML = "&#9776;";
        menu.setAttribute("aria-label", "Abrir menu");
    }

});


// Ano automático
document.querySelector("#anoatual").textContent =
new Date().getFullYear();


// Última atualização
document.querySelector("#ultimaModificacao").textContent =
"Última atualização: " + document.lastModified;