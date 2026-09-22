function showSection(id, botao) {

    const sections = document.querySelectorAll("section");
    const buttons = document.querySelectorAll("button");

    sections.forEach(function(section) {
        section.style.display = "none";
        section.classList.remove("aparecer");
    });

    buttons.forEach(function(button) {
        button.classList.remove("ativo");
    });

    const sectionEscolhida = document.getElementById(id);

    sectionEscolhida.style.display = "block";
    sectionEscolhida.classList.add("aparecer");

    botao.classList.add("ativo");
}

function mostrarCurriculo() {
    const apresentacao = document.getElementById("apresentacao");
    const menu = document.getElementById("menu");

    apresentacao.style.display = "none";
    menu.style.display = "flex";

    menu.classList.add("aparecer-menu");
}