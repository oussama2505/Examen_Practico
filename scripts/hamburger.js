document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const closeMenuBtn = document.getElementById('close-menu');

function toggleMenu() {
        menu.classList.toggle('active'); 
    }

    menuIcon.addEventListener('click', toggleMenu); 
    closeMenuBtn.addEventListener('click', toggleMenu);
});

