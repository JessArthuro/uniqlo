// ---------- Open/Close menu navegation ----------
const btnMenu = document.getElementById("btn-menu");
const navList = document.getElementById("nav-menu");
const btnClose = document.getElementById("menu-close");

btnMenu.addEventListener("click", () => {
    navList.classList.add("show");
});
btnClose.addEventListener("click", () => {
    navList.classList.remove("show");
});


// Remove the menu when clicking on a link
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    navList.classList.remove("show");
}

navLink.forEach(n => n.addEventListener('click', linkAction));



// ---------- Add shadow in header when scrolling ----------
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);



// Popular slider settings
let swiper = new Swiper(".popular__slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});



// Scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
});

sr.reveal(`.home__grid, .swiper__content, .news__content, .footer__content`)
