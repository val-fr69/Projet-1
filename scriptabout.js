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

var i = 0 ;
        function myFunctionCountriesVisited() {
        if(i < 92) {
        		i++;
                document.getElementById('countriesvisited').innerHTML= i;

        }
    }

    
     var j = 0 ;
        function myFunctionyearsphotographie() {
        if(j < 23) {
        		j++;
                document.getElementById('yearsphotographie').innerHTML= j;

        }
    } 

    var k = 0 ;
        function myFunctiontourshosted() {
        if(k < 30) {
        		k++;
                document.getElementById('tourshosted').innerHTML= k;

        }
    }

    var l = 0 ;
        function myFunctionphotographieawards() {
        if(l < 100) {
        		l++;
                document.getElementById('photographieawards').innerHTML= l;

        }
    }

    function testFunction(){

myFunctiontourshosted();
myFunctionCountriesVisited();
myFunctionphotographieawards();
myFunctionyearsphotographie();
    }