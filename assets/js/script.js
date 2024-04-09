document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll('.image-container');
    const fullImageOverlay = document.querySelector('.full-image-overlay');
    const fullImage = fullImageOverlay.querySelector('img');
    const closeBtn = fullImageOverlay.querySelector('.close-btn');

    imageContainers.forEach(container => {
        container.addEventListener('click', function () {
            const imgSrc = this.querySelector('img').src;
            fullImage.src = imgSrc;
            fullImageOverlay.style.display = 'flex';
        });
    });

    fullImageOverlay.addEventListener('click', function (event) {
        if (event.target === this || event.target === closeBtn) {
            fullImageOverlay.style.display = 'none';
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var toggleNav = document.getElementById("toggleNav");
    var navLinks = document.querySelector(".nav-links");

    toggleNav.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
    document.addEventListener("click", function(event) {
        if (!navLinks.contains(event.target) && !toggleNav.contains(event.target)) {
            navLinks.classList.remove("show");
        }
    });
});

  
