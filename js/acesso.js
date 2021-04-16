let acesso = document.querySelector(".enviar");
acesso.addEventListener("click", function (event) {
    //  <-- barra comportamento padrão navegado -->
    event.preventDefault();

    let form = document.querySelector(".form-group");
    let usuario = document.querySelector("#usuario").value;
    let senha = document.querySelector("#senha").value;

    if (usuario == "a" && senha == "a") {
        //ocultaAdicionaCardapio();
        console.log("ok")

    } else {
       // alert("senha e usuarios inválidos");
    }
});

function ocultaAdicionaCardapio() {
    let cardapios = document.querySelector(".cardapios");
    cardapios.classList.add("oculta-cardapio");
};



// <--- listas --->

function criaListaVegana() {
    let enviaListaVegana = document.querySelector(".enviar-lista-veg");
    enviaListaVegana.addEventListener("click", function () {

        let primeira = document.querySelector("#veg-1");
        let segunda =document.querySelector("#veg-2");
        let terceira =  document.querySelector("#veg-3");
        let quarta = document.querySelector("#veg-4");
        let quinta = document.querySelector("#veg-5");

       let primeiroInput = primeira.value;
       let segundoInput = segunda.value;
       let terceiroInput = terceira.value;
       let quartoInput = quarta.value;
       let quintoInput = quinta.value;

    });
};

function criaListaVeganaOrganica() {
    let enviaListaVeganaOrganico = document.querySelector(".enviar-lista-veg-org");
    enviaListaVeganaOrganico.addEventListener("click", function () {

        let primeira = document.querySelector("#veg-org-1");
        let segunda =document.querySelector("#veg-org-2");
        let terceira =  document.querySelector("#veg-org-3");
        let quarta = document.querySelector("#veg-org-4");
        let quinta = document.querySelector("#veg-org-5");

        
       let primeiroInput = primeira.value;
       let segundoInput = segunda.value;
       let terceiroInput = terceira.value;
       let quartoInput = quarta.value;
       let quintoInput = quinta.value;

    });
};

function pegaInputVegano(){
    document.querySelector
};

criaListaVeganaOrganica();