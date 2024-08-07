document.addEventListener('DOMContentLoaded', function () {
    const lines = document.querySelector(".lines");
    const nav_menu = document.querySelector(".navigation-menu");
    const nav_btn = document.querySelectorAll(".nav-btn");
    let active = true;
    const activeNav = () => {
        if (active) {
            lines.classList.add("lines-active");
            nav_menu.classList.add("navigation-menu-active");
            document.body.classList.add("body-lock")
            active = !active;
        } else if (!active) {
            lines.classList.remove("lines-active");
            nav_menu.classList.remove("navigation-menu-active");
            document.body.classList.remove("body-lock")
            active = !active;
        }
    }
    lines.addEventListener("click", () => {
        activeNav();
    })
    nav_btn.forEach((btn) => {
        btn.addEventListener("click", () => {
            activeNav();
        })
    })
    const bottom_arrow = document.getElementById("bottom-arrow")
    bottom_arrow.addEventListener("click", () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For  Chrome, Firefox, IE and Opera
    })
    var prevScrollpos = window.scrollY;
    window.onscroll = function () {
        // hide menu on srollY 
        var currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-8rem";
        }
        prevScrollpos = currentScrollPos;

        // show arrow top
        if (scrollY > 7000) {
            bottom_arrow.classList.add("arrow-go-top-active")
        }
        else {
            bottom_arrow.classList.remove("arrow-go-top-active")
        }

    }
    const year_span = document.getElementById('year')
    const current_full_year = new Date().getFullYear();
    if (current_full_year > 2024) {
        year_span.textContent = " - " + current_full_year;
    }
    const sections = document.querySelectorAll('.content-section-hidden');
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of the section is visible
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('content-section-visible');
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });

});