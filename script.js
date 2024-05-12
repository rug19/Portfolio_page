// Menu mobile

let menuButton = document.getElementById('menu-button');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu')

menuButton.addEventListener('click', ()=>{
    menu.classList.add('open')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('open')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('open')
})

