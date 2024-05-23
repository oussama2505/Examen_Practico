// Scroll hacia arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Scroll hacia abajo
window.addEventListener('scroll', function() {
    var arrowUp = document.getElementById('arrow-up');
    if (window.scrollY > 300) {
        arrowUp.style.display = 'block';
    } else {
        arrowUp.style.display = 'none';
    }
});
