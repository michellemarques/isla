let botaoValidar = document.querySelector('.botaoValidar');
botaoValidar.addEventListener("click", function (event) {
    //  <-- barra comportamento padrão navegado -->
    event.preventDefault();

    let form = document.querySelector("#acesso");
    let usuario = form.login.value;
    let senha = form.senha.value;

    if (usuario == 123 && senha == 123) {
        ocultaAdicionaCardapio();
        
    } else {
        //alert("senha e usuarios inválidos");
    }
});

function ocultaAdicionaCardapio() {
    let cardapios = document.querySelector(".cardapios");
    cardapios.classList.add("oculta-cardapio");
};




function criaListaVegana() {
    let botaoAdicionar = document.querySelector(".comida-vegana");
    botaoAdicionar.addEventListener("click", function () {
        let lista = document.querySelector(".cardapio-normal");
        console.log(lista);
    })



}



