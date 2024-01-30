const btAbrir = document.querySelector(".menu-mobile")
const btFechar = document.querySelector(".menu-mobile-close")
const menuLateral = document.querySelector(".cabecalho .menu-container")
const transparencia = document.querySelector(".transparencia")

btAbrir.addEventListener("click", ()=> {
    menuLateral.classList.add("ativo")
    transparencia.classList.add("ativo")
})

btFechar.addEventListener("click", ()=> {
    menuLateral.classList.remove("ativo")
    transparencia.classList.remove("ativo")
})

