document.addEventListener('DOMContentLoaded', function() {
    // Get the menu icon and menu
    var menuIcon = document.getElementById('menu-icon');
    var menu = document.getElementById('menu');

    // Toggle the menu when the menu icon is clicked
    menuIcon.addEventListener('click', function() {
        // Toggle the class that shows/hides the menu
        menu.classList.toggle('show-menu');
    });
});
