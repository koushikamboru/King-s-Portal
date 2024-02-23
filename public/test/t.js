let slideIndex = 0;
showSlides();

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

function showSlides() {
    let i;
    const slides = document.querySelectorAll('.hero_img');
    const dots = document.querySelectorAll('.dot');
    
    // Hide all slides and remove active class from dots
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove('active');
    }
    
    // Show current slide and add active class to corresponding dot
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
    
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 6500); // Change slide every 6 seconds
}