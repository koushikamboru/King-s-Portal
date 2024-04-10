let slideIndex = 0;
showSlides();

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

function showSlides() {
    const slides = document.querySelectorAll('.hero_img');
    const infos = document.querySelectorAll('.hero_info_cont');
    const dots = document.querySelectorAll('.dot');
    
    // Hide all slides, infos, and remove active class from dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        infos[i].style.display = 'none';
        dots[i].classList.remove('active');
    }
    
    // Show current slide, info, and add active class to corresponding dot
    slides[slideIndex].style.display = 'block';
    infos[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
    
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 6500); // Change slide every 6.5 seconds
}


//login buttton          
var loginBtn = document.getElementById('login_btn');


loginBtn.addEventListener('click', function() {

  var loginPopup = window.open('login.html', 'loginPopup', 'width=600,height=400');
  

  if (loginPopup && !loginPopup.closed) {
    loginPopup.focus();
  }
});
