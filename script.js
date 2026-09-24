/* =========================================
   MENÚ PARA CELULARES
========================================= */

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


/* =========================================
   CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
========================================= */

const menuLinks = document.querySelectorAll(".nav-links a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});


/* =========================================
   ANIMACIÓN AL HACER SCROLL
========================================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


sections.forEach(function(section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(section);

});
