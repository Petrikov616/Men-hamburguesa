

document.addEventListener('DOMContentLoaded', function (){
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navToggleLines = document.querySelectorAll('.nav_toggle-line');

    navToggle.addEventListener('click',function(){
        navMenu.classList.toggle('nav_menu--active');
        
        navToggleLines[0].classList.toggle('nav_toggle-line--top-active')
        navToggleLines[1].classList.toggle('nav_toggle-line--middle-active')
        navToggleLines[2].classList.toggle('nav_toggle-line--bottom-active')

    })
})