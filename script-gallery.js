// Script NavBar


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const titleHome = document.querySelector('.home-head');
const nav = document.querySelector('.nav-bar');


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    titleHome.classList.toggle('active');
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 160) {
        nav.classList.add('scroll');
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        titleHome.classList.add('scroll');
    }
    else {
        nav.classList.remove('scroll');
        titleHome.classList.remove('scroll');
    }
});

// Script Gallery


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('dot');


    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    // Cacher toutes les slides

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Afficher la slide demandée 

    slides[slideIndex - 1].style.display = 'block';


}