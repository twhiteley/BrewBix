//change header as user scroll

const header = document.querySelector("header")
const title = document.querySelector(".title")

//used to check how many times changeHeader() function is firing
let i = 0

//throttling code
let last_known_scroll_position = 0;

//changes header size if scrolled down
function changeHeader() {
    i++
    console.log(last_known_scroll_position,i);
    if(last_known_scroll_position > 50) {
        header.classList.add("sticky")
        title.classList.add("sticky")
    }
    else {
        header.classList.remove("sticky")
        title.classList.remove("sticky")
    }
}

// throttling code
let ticking = false;
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