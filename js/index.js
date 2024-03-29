const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const loader = document.getElementById("preloader");


window.addEventListener("load", function () {
  loader.style.display = "none";
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));


let viewAllBtn = document.querySelector('#view-all');
let currentItem = 1;

viewAllBtn.onclick = () => {
  let cards = [...document.querySelectorAll('.center .menu_card')];
  for (var i = currentItem; i < currentItem + 2; i++) {
    cards[i].style.display = 'inline-block';
  }
  currentItem += 7;
  if (currentItem >= cards.length) {
    viewAllBtn.style.display = "none";
  }
};


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});