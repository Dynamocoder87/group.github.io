
'use strict';

/* navbar toggle*/

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}



/* header sticky & back to top*/

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/* search box toggle */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}



/* move cycle on scroll */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});




let cart = [];
let totalPrice = 0;

// Function to add product to cart
function addToCart() {
  const product = {
    name: "Product Name",
    price: 10.99,
  };

  // Add product to cart array
  cart.push(product);
  totalPrice += product.price;

  // Update cart HTML
  updateCart();
}

// Function to update cart HTML
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  // Clear existing cart items
  cartItems.innerHTML = "";

  // Add new cart items
  cart.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.name} - $${product.price}`;
    cartItems.appendChild(listItem);
  });

  // Update total price
  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}



function addToCart(productName, price) {
  const product = {
    name: productName,
    price: price,
  };

  // Add product to cart array
  cart.push(product);
  totalPrice += price;

  // Update cart HTML
  updateCart();}

  