// Navbar - Menu

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailClose = document.querySelector('.product-detail-close');
const arrow = document.querySelector('.arrow');
const cartIconMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const mainContainer = document.querySelector('.main-overlay');
const cardsContainer = document.querySelector('.cards-container')
const productDetailsAside = document.querySelector('.product-detail-secondary');


menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleBurgerMenu);
cartIconMenu.addEventListener('click', toggleCartAside);
productDetailClose.addEventListener('click', closeProductDetailAside);
mainContainer.addEventListener('click', closeDivOverlay);
arrow.addEventListener('click', closeShoppingCart);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    const isProductDetailClosed = productDetailClose.classList.contains('inactive');
    desktopMenu.classList.toggle('inactive');
    mainContainer.classList.remove('overlay');

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }
    if(!isProductDetailClosed) { 
        productDetailsAside.classList.add('inactive');
    }
}

function toggleBurgerMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    const isProductDetailClosed = productDetailsAside.classList.contains('inactive');

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }
    if(!isProductDetailClosed) {
        productDetailsAside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
    // const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    // const isAsideOpen = !aside.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailsAside.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if(!isProductDetailClosed) {
        productDetailsAside.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
    mainContainer.classList.add('overlay');
}

function openProductDetailAside() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isAsideClosed = aside.classList.contains('inactive');
    productDetailsAside.classList.remove('inactive');
    mainContainer.classList.add('overlay');

    if(!isDesktopMenuClosed) { 
        desktopMenu.classList.add('inactive');
    }
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
}

function closeProductDetailAside() {
    productDetailsAside.classList.add('inactive');
    mainContainer.classList.remove('overlay');
}

function closeShoppingCart() {
    aside.classList.add('inactive');
    mainContainer.classList.remove('overlay');
}

function closeDivOverlay() {
    aside.classList.add('inactive');
    productDetailsAside.classList.add('inactive');
    mainContainer.classList.remove('overlay');
}

// Product list
const productList = [];
productList.push({
    name: 'Mountain Bike',
    price: 700,
    image: '/images/mountain-bike-yellow.webp'
    // image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""',

});
productList.push({
    name: 'Big Nine',
    price: 799,
    image: '/images/big-nine-300-2021.jpg'
});
productList.push({
    name: 'BH Expert',
    price: 915,
    image: '/images/bike-bhExpert.jpg'
});
productList.push({
    name: 'GT Street Performer',
    price: 720,
    image: '/images/gt-street-performer-29.jpg'
});
productList.push({
    name: 'Conor Rave',
    price: 405,
    image: '/images/conor-rave.jpg'
});


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');
    
        productPrice.innerText = '$' + product.price;
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productIconCart = document.createElement('img');
        productIconCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productIconCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);