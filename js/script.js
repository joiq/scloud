$(document).ready(function () {
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
  const comparsionList = document.querySelector('#comparsion-list1');

  showMoreGreen.addEventListener('click', () => {
    comparsionList.classList.toggle('list-hide');
  });

  const showMoreOrange = document.querySelector('.comparsion-more-orange');
  const comparsionList2 = document.querySelector('#comparsion-list2');

  showMoreOrange.addEventListener('click', () => {
    comparsionList2.classList.toggle('list-hide');
  });

  const footerTypicalSolveTitle = document.querySelector('#footerTypicalSolveTitle');
  const footerTypicalSolveList = document.querySelector('#footerTypicalSolveList');
  const footerIndustryTitle = document.querySelector('#footerIndustryTitle'),
        footerIndustryList = document.querySelector('#footerIndustryList'),
        footerServicesTitle = document.querySelector('#footerServicesTitle'),
        footerServicesList = document.querySelector('#footerServicesList'),
        footerFeaturesTitle = document.querySelector('#footerFeaturesTitle'),
        footerFeaturesList = document.querySelector('#footerFeaturesList');


  footerTypicalSolveTitle.addEventListener('click', () => {
    footerTypicalSolveList.classList.toggle('show');
  });

  footerIndustryTitle.addEventListener('click', () => {
    footerIndustryList.classList.toggle('show');
  });

  footerServicesTitle.addEventListener('click', () => {
    footerServicesList.classList.toggle('show');
  });

  footerFeaturesTitle.addEventListener('click', () => {
    footerFeaturesList.classList.toggle('show');
  });

});