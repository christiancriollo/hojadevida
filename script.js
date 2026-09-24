/* =========================================
   MENÚ PARA CELULARES
========================================= */

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


/* =========================================
   CERRAR MENÚ AL SELECCIONAR
========================================= */

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});
