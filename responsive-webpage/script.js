// JavaScript to handle the collapsing menu on smaller screens and resizing the page
document.getElementById('toggleBtn').addEventListener('click', function() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('collapsed');
});

// Function to shrink page based on screen width
function resizePage() {
    const width = window.innerWidth;
    let scale = 1;

    if (width >= 992 && width <= 1600) {
        scale = 0.9;
    } else if (width >= 700 && width <= 767) {
        scale = 0.8;
    } else if (width >= 600 && width <= 700) {
        scale = 0.75;
    } else if (width <= 600) {
        scale = 0.5;
    }

    document.body.style.transform = `scale(${scale})`;
    document.body.style.transformOrigin = "top left";
}

// Call resize function on load and resize
window.addEventListener('load', resizePage);
window.addEventListener('resize', resizePage);
