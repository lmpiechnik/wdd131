

let contador =
Number(localStorage.getItem("contadorAvaliacoes")) || 0;

contador++;

localStorage.setItem(
    "contadorAvaliacoes",
    contador
);

document.querySelector("#contador").textContent =
contador;