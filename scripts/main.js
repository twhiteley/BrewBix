//change header as user scroll

const header = document.querySelector("header")
const title = document.querySelector(".title")


let i = 0

//throttling code
let last_known_scroll_position = 0;
let ticking = false;

function changeHeader() {
    let scrollPosition = Math.round(window.scrollY)
    i++
    console.log(scrollPosition,i);
    if(scrollPosition > 50) {
        header.classList.add("sticky")
        title.classList.add("sticky")
    }
    else {
        header.classList.remove("sticky")
        title.classList.remove("sticky")
    }
}

window.addEventListener("scroll",function(e) {
    last_known_scroll_position = window.scrollY;
  
    if (!ticking) {
      window.requestAnimationFrame(function() {
        changeHeader();
        ticking = false;
      });
  
      ticking = true;
    }
  });

// Hamburger

const menuButton = document.querySelectorAll(".menu-button")
const menu = document.querySelector('aside')
menuButton.forEach(function(button) {
    button.addEventListener("click",toggleNav)
})

function toggleNav() {
    menu.classList.toggle('show')
}