$(document).ready(function() {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto',
    autoplayDisableOnInteraction: false,
  })
})