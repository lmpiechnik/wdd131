

// Ano atual
document.getElementById("anoatual").textContent =
    new Date().getFullYear();

// Última modificação do documento
document.getElementById("ultimaModificacao").textContent =
    `Última Modificação: ${document.lastModified}`;
