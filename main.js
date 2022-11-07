const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIconMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleBurgerMenu);
cartIconMenu.addEventListener('click', toggleCartAside);


const isAsideClosed = aside.classList.contains('inactive');
const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

    if(isAsideClosed) {
        aside.classList.add('inactive');
    }
}

function toggleBurgerMenu() {
    if(isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
    // const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    // const isAsideOpen = !aside.classList.contains('inactive');

    if(isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if(isDesktopMenuClose) {
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}
