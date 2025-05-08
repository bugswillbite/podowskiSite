document.addEventListener("DOMContentLoaded", function () {
    const images = ["PFCL.jpg", "PFCL1.png", "PFCL2.png", "PFCL3.png", "PFCL4.png", "PFCL5.png", "PFCL6.png", "PFCL7.png"]; 
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
