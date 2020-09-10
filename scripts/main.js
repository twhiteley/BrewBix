//change header as user scroll

const header = document.querySelector("header")
const title = document.querySelector(".title")
window.addEventListener("scroll",changeHeader)

function changeHeader() {
    let scrollPosition = Math.round(window.scrollY)
    console.log(scrollPosition);
    if(scrollPosition > 50) {
        header.classList.add("sticky")
        title.classList.add("sticky")
    }
    else {
        header.classList.remove("sticky")
        title.classList.remove("sticky")
    }
}

// Hamburger

const menuButton = document.querySelectorAll(".menu-button")
const menu = document.querySelector('aside')
menuButton.forEach(function(button) {
    button.addEventListener("click",toggleNav)
})

function toggleNav() {
    menu.classList.toggle('show')
}