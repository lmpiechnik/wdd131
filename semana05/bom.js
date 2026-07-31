



const input = document.querySelector('#favchap');
const botao = document.querySelector('button');
const lista = document.querySelector('#list');

let arrayCapitulos = obterListaDeCapitulos() || [];

arrayCapitulos.forEach(capitulo => {
    exibirLista(capitulo);
});

botao.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        exibirLista(input.value);
        arrayCapitulos.push(input.value);
        definirListaDeCapitulos();
        input.value = '';
        input.focus();
    }
});

function exibirLista(item) {
    const li = document.createElement('li');
    const botaoExcluir = document.createElement('button');

    li.textContent = item;

    botaoExcluir.textContent = '❌';
    botaoExcluir.setAttribute('aria-label', `Excluir ${item}`);
    botaoExcluir.classList.add('delete');

    li.append(botaoExcluir);
    lista.append(li);

    botaoExcluir.addEventListener('click', function () {
        lista.removeChild(li);
        excluirCapitulo(item);
        input.focus();
    });
}

function definirListaDeCapitulos() {
    localStorage.setItem('minhaListaFavoritosLDM', JSON.stringify(arrayCapitulos));
}

function obterListaDeCapitulos() {
    return JSON.parse(localStorage.getItem('minhaListaFavoritosLDM'));
}

function excluirCapitulo(capitulo) {
    capitulo = capitulo.slice(0, capitulo.length - 1);
    arrayCapitulos = arrayCapitulos.filter(item => item !== capitulo);
    definirListaDeCapitulos();
}



