console.log("Parsa Alikhani Website");

// ==========================
// Elements
// ==========================

const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".nav-links a");
const cards = document.querySelectorAll(".card");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

const backToTop = document.querySelector("#backToTop");


// ==========================
// Navbar
// ==========================

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }

});


// ==========================
// Active Navigation
// ==========================

links.forEach(function (link) {

    link.addEventListener("click", function () {

        links.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// ==========================
// Smooth Scroll
// ==========================

links.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const navbarHeight = navbar
            ? navbar.offsetHeight
            : 0;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight -
            20;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

        if (navLinks) {
            navLinks.classList.remove("open");
        }

        if (menuToggle) {
            menuToggle.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });

});


// ==========================
// Works Cards
// ==========================

cards.forEach(function (card) {

    card.addEventListener("click", function () {

        const title = card.querySelector("h3").textContent;

        console.log(title);

    });

});


// ==========================
// Back To Top
// ==========================

if (backToTop) {

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
            top: 0,
            behavior: "smooth"
        });

    });

}


// ==========================
// Mobile Menu
// ==========================

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.classList.toggle("open", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });

}
