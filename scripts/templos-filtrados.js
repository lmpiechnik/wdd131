

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
document.querySelector("#anoatual").textContent = new Date().getFullYear();


// Última atualização
document.querySelector("#ultimaModificacao").textContent = `Última modificação: ${document.lastModified}`;

const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Salt Lake Utah",
    localizacao: "Salt Lake City, Utah, Estados Unidos",
    consagracao: "1893, 6 de abril",
    area: 253015,
    urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },

  {
    nomeDoTemplo: "Rome Italy",
    localizacao: "Roma, Itália",
    consagracao: "2019, 10 de março",
    area: 41010,
    urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },


];

const galeria = document.querySelector(".galeria");

function mostrarTemplos(listaTemplos) {

    galeria.innerHTML = "";

    listaTemplos.forEach(templo => {

        const figure = document.createElement("figure");
        figure.classList.add("card");

        const img = document.createElement("img");
        img.src = templo.urlDaImagem;
        img.alt = templo.nomeDoTemplo;
        img.loading = "lazy";

        const caption = document.createElement("figcaption");
        caption.textContent = templo.nomeDoTemplo;

        figure.appendChild(img);
        figure.appendChild(caption);

        galeria.appendChild(figure);

    });

}

const titulo = document.querySelector("main h2");

function atualizarTitulo(texto) {
    titulo.textContent = texto;
}

function mostrarTemplos(listaTemplos) {

    galeria.innerHTML = "";

    listaTemplos.forEach((templo) => {

        const figure = document.createElement("figure");
        figure.classList.add("card");

        const nome = document.createElement("h3");
        nome.textContent = templo.nomeDoTemplo;

        const localizacao = document.createElement("p");
        localizacao.innerHTML = `<strong>Localização:</strong> ${templo.localizacao}`;

        const consagracao = document.createElement("p");
        consagracao.innerHTML = `<strong>Consagração:</strong> ${templo.consagracao}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Área:</strong> ${templo.area.toLocaleString()} pés²`;

        const img = document.createElement("img");
        img.src = templo.urlDaImagem;
        img.alt = templo.nomeDoTemplo;
        img.loading = "lazy";
        img.width = 400;
        img.height = 250;

        figure.appendChild(nome);
        figure.appendChild(localizacao);
        figure.appendChild(consagracao);
        figure.appendChild(area);
        figure.appendChild(img);

        galeria.appendChild(figure);

    });

}

mostrarTemplos(templos);

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();

    atualizarTitulo("Todos os Templos");
    mostrarTemplos(templos);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();

    const antigos = templos.filter(templo =>
        Number(templo.consagracao.split(",")[0]) < 1900
    );

    atualizarTitulo("Templos Antigos");
    mostrarTemplos(antigos);
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();

    const novos = templos.filter(templo =>
        Number(templo.consagracao.split(",")[0]) > 2000
    );

    atualizarTitulo("Templos Novos");
    mostrarTemplos(novos);
});

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();

    const grandes = templos.filter(templo =>
        templo.area > 90000
    );

    atualizarTitulo("Templos Grandes");
    mostrarTemplos(grandes);
});

document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();

    const pequenos = templos.filter(templo =>
        templo.area < 10000
    );

    atualizarTitulo("Templos Pequenos");
    mostrarTemplos(pequenos);
});