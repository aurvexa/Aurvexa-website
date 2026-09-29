document.addEventListener("DOMContentLoaded", function () {

    // Mobile menu
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function () {
            nav.classList.toggle("active");
        });
    }

    // Close mobile menu after clicking a link
    document.querySelectorAll(".nav a").forEach(function (link) {
        link.addEventListener("click", function () {
            if (nav) {
                nav.classList.remove("active");
            }
        });
    });

    // Current year
    const year = document.querySelector("#year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
