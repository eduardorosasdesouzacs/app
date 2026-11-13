
function entrar() {

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (usuario.trim() === "" || senha.trim() === "") {

        mensagem.textContent =
            "Por favor, preencha todos os campos!";

        return;
    }

    document.getElementById("login").classList.add("escondido");

    document.getElementById("treinos").classList.remove("escondido");
}


function mostrarPagina(paginaSelecionada) {

    const paginas = [
        "treinos",
        "alimentacao",
        "saude"
    ];

    paginas.forEach(function(pagina) {

        document.getElementById(pagina)
            .classList.add("escondido");

    });

    document.getElementById(paginaSelecionada)
        .classList.remove("escondido");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
