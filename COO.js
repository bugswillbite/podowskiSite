function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('selectedTheme', theme); // Save theme preference
}

// Load saved theme on page load
window.onload = function () {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        document.body.className = savedTheme;
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const images = ["zeroFront.png", "zeroBack.png"]; 
    let currentIndex = 0;
    const imgElement = document.getElementById("slideshow");
    const nextButton = document.getElementById("nextImage");

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
    });

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        imgElement.src = images[currentIndex];
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = ["Hclassic.png", "hovCats.png", "Hcircles.png", "Hstriped.png"]; 
    let currentIndex = 0;
    const imgElement = document.getElementById("slideshow2");
    const nextButton = document.getElementById("nextImage2");
    const prevButton = document.getElementById("prevImage");

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
    });

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        imgElement.src = images[currentIndex];
    });
});