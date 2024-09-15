const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

let currentSlide = 0;

function moveSlide(step) {
    const slides = document.getElementById('slider');
    const totalSlides = slides.children.length;

    currentSlide = (currentSlide + step + totalSlides) % totalSlides;

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
