$(document).ready(function() {
  $('.feedback__wrapper').slick({
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  

  $("#phone-input").mask("+7 (999) 999-9999");

  // Scroll top
  const offset = 100;
  const scrollTop = document.querySelector('.scroll-top');

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    if (getTop() > offset) {
      scrollTop.classList.add('scroll-top--active');
    } else {
      scrollTop.classList.remove('scroll-top--active');
    }
  });

  scrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Show/hide list 
  const showMoreGreen = document.querySelector('.comparsion-more-green');
  console.log(showMoreGreen);
});