let slideIndex = 1;
showSlides(slideIndex);

function nextSlide(){
    slideIndex+=1;
    showSlides(slideIndex);
}

function previousSlide(){
    slideIndex-=1;
    showSlides(slideIndex);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("review");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
}

