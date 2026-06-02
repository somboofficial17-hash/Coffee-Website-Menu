const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
//Toggle mobile menu visibility
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});
//Close menuu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBulletes:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //Responsive breakposints
  breakpoints:{
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }
});