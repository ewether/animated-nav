const hamburgerNav = document.querySelector('.hamburger-nav');
const navLines = document.querySelector('.nav-lines');
const nav = document.querySelector('.nav-list');

hamburgerNav.addEventListener('click', function() {
    // divs rotate
    navLines.classList.toggle('is-clicked');
    // nav shows
    nav.classList.toggle('show');
});