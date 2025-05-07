document.addEventListener("DOMContentLoaded", function () {
    const images = ["LDR1.png", "LDR5.png", "LDR11.png", "LDR4.png", "LDR12.png", "LDR7.png", "LDR2.png", "LDR11.png", "LDR8.png", "LDR10.png", "LDR16.png", "LDR6.png", "LDR3.png",]; 
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

function sFunction1()
{
    s1();
    s2();
    s3();
}
function s1()
{
    document.getElementById('slide1').src='idog.JPG';
}
function s2()
{
    document.getElementById('slide2').src='hex.JPG';
}function s3()
{
    document.getElementById('slide3').src='bro.jpg';
}
function sFunction2()
{
    document.getElementById('slide1').src='fish.JPG';
    document.getElementById('slide2').src='fly.JPG';
    document.getElementById('slide3').src='monkee.JPG';
}
function sFunction3()
{
   document.getElementById('slide1').src='peng.JPG';
    document.getElementById('slide2').src='pillar.JPG';
    document.getElementById('slide3').src='pik.JPG';
}



