const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const titleHome = document.querySelector('.home-head');
const nav = document.querySelector('.nav-bar');


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    titleHome.classList.toggle('active');
})

window.addEventListener('scroll', () =>  {
       if(window.scrollY > 30) {
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

