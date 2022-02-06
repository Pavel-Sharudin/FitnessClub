const swiper2 = new Swiper('.main-testimonial-area', {
  // Optional parameters
  slidesPerView: 1,
  centerSlidesBounds: true,
  centeredSlides: true,
  observeSlideChildren: true,
  speed: 600,

  // Navigation arrows
  navigation: {
    nextEl: '.right',
    prevEl: '.left',
  },
});
