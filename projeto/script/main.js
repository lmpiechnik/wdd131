
console.log("JavaScript carregado");

// ================================
// Seletores
// ================================

const mensagem = document.querySelector("#mensagemUsuario");
const botao = document.querySelector("#btnNome");

// ================================
// Função
// ================================

function mostrarMensagem() {

    if (!mensagem) return;

    const nome = localStorage.getItem("usuario");

    if (nome) {

        mensagem.textContent = `Bem-vindo novamente, ${nome}!`;

    } else {

        mensagem.textContent = "Bem-vindo ao meu portfólio!";

    }

}

// ================================
// Evento
// ================================



if (botao) {

    botao.addEventListener("click", () => {

        const nome = prompt("Digite seu nome:");

        if (nome && nome.trim() !== "") {

            localStorage.setItem("usuario", nome);

            mostrarMensagem();

        }

    });

}

// ================================
// Inicialização
// ================================

mostrarMensagem();


// ================================
// Serviços
// ================================

const servicos = [
    {
        titulo: "Consultoria",
        descricao: "Consultoria técnica para melhoria de processos e gestão empresarial."
    },
    {
        titulo: "Auditorias",
        descricao: "Auditorias internas, externas e de fornecedores."
    },
    {
        titulo: "Relatórios Técnicos",
        descricao: "Elaboração de pareceres e documentação técnica."
    },
    {
        titulo: "Perícia Judicial",
        descricao: "Análises técnicas e emissão de laudos."
    }
];

function carregarServicos() {

    const lista = document.querySelector("#listaServicos");

    if (!lista) return;

    // Limpa o conteúdo antes de adicionar os cards
    lista.innerHTML = "";

    servicos.forEach(servico => {

        lista.innerHTML += `
            <article>
                <h3>${servico.titulo}</h3>
                <p>${servico.descricao}</p>
            </article>
        `;

    });

}

document.addEventListener("DOMContentLoaded", carregarServicos);
