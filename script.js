console.log("Parsa Alikhani Website");

const navbar = document.querySelector(".navbar");

const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        navbar.classList.add("active");

    }

    else{

        navbar.classList.remove("active");

    }

});
links.forEach(function(link){

    link.addEventListener("click", function(){

        links.forEach(function(item){

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});
const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("click", function(){

        console.log(card.querySelector("h3").textContent);

    });

});
const works = [
{
    title:"Automations No.1",
    category:"Electroacoustic"
},
{
    title:"String Quartet No.1",
    category:"Chamber Music"
},
{
    title:"Symphonic Poem No.1",
    category:"Orchestra"
}
];
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
// ==========================
// Back To Top
// ==========================

const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", function () {

    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    const scrollPercentage =
        (scrollPosition / (pageHeight - windowHeight)) * 100;

    if (scrollPercentage > 70) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// ==========================
// Mobile Menu
// ==========================
// ==========================
// MOBILE MENU
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("open");

    });

}
});
console.log(menuToggle);
console.log(navLinks);
