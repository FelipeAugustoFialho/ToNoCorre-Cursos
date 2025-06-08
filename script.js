const all = document.querySelector(".showAll");


const menu = document.querySelector("navMobile");
const list = document.querySelector('li');
const menuIcon = document.querySelector('.menu-icon');
const menuOptions = document.querySelector('.menu-options');


function toggleMenu() {
    menuOptions.classList.toggle('active');
}


function msg(){
    alert("No momento não há mais páginas de cursos disponíveis")
}

menuIcon.addEventListener('click', toggleMenu);
all.addEventListener('click',msg);