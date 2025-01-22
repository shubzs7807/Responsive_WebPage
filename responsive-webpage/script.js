document.getElementById('toggleMenu').addEventListener('click', function() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('collapsed');
});

// Function to handle window resize
window.addEventListener('resize', function() {
    adjustScale();
});

// Initial call to set the scale
adjustScale();

function adjustScale() {
    const width = window.innerWidth;
    const body = document.body;

    if (width >= 992 && width <= 1600) {
        body.style.transform = 'scale(0.9)';
    } else if (width >= 700 && width < 992) {
        body.style.transform = 'scale(0.8)';
    } else if (width >= 600 && width < 700) {
        body.style.transform = 'scale(0.75)';
    } else if (width < 600) {
        body.style.transform = 'scale(0.5)';
    } else {
        body.style.transform = 'scale(1)';
    }
}