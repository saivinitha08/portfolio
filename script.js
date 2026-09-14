/* =====================================================
   MOBILE MENU
===================================================== */

const menuIcon = document.getElementById("menu-icon");

const navbar = document.getElementById("navbar");


menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");


    const icon =
        menuIcon.querySelector("i");


    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

const navLinks =
    document.querySelectorAll(".navbar a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");


        const icon =
            menuIcon.querySelector("i");


        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section");

const links =
    document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.clientHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    links.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



/* =====================================================
   SCROLL TOP BUTTON
===================================================== */

const scrollTop =
    document.getElementById("scroll-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


scrollTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contact-form");


const formMessage =
    document.getElementById("form-message");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name")
        .value
        .trim();


    const email =
        document.getElementById("email")
        .value
        .trim();


    const subject =
        document.getElementById("subject")
        .value
        .trim();


    const message =
        document.getElementById("message")
        .value
        .trim();



    if (
        !name ||
        !email ||
        !subject ||
        !message
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;

    }



    const mailtoLink =

        `mailto:saivineethanayak@gmail.com` +

        `?subject=${encodeURIComponent(subject)}` +

        `&body=${encodeURIComponent(

            "Name: " +
            name +

            "\nEmail: " +
            email +

            "\n\nMessage:\n" +
            message

        )}`;



    formMessage.textContent =
        "Opening your email application...";


    window.location.href =
        mailtoLink;

});



/* =====================================================
   DEMO BUTTON
===================================================== */

const demoLinks =
    document.querySelectorAll(".demo-link");


demoLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        if (this.getAttribute("href") === "#") {

            event.preventDefault();


            alert(
                "Live demo link will be added soon."
            );

        }

    });

});