document.addEventListener("DOMContentLoaded", function () {
    const images = ["C2one.jpg", "C2two.jpg"]; 
    let currentIndex = 0;
    const imgElement = document.getElementById("slideshow");
    const nextButton = document.getElementById("nextImage");
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
