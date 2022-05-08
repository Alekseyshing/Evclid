window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
    document.querySelector('.header__burger').classList.toggle('burger-active')
  })

  document.querySelector('#search-btn').addEventListener('click', function() {
    document.querySelector('#form').classList.toggle('header__search-form-active')
    document.querySelector('#search-btn').classList.toggle('header__search-btn-epsent')
  })

  document.querySelector('#search-btn').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('header__is-hidden')
  })

  document.querySelector('#icon').addEventListener('click', function() {
    document.querySelector('.questions__icon').classList.toggle('questions__icon-active')
  })


  document.querySelector('#closed-search').addEventListener('click', function() {
    document.querySelector('#form').classList.toggle('header__search-form-active')
    document.querySelector('#search-btn').classList.toggle('header__search-btn-epsent')
    document.querySelector('#menu').classList.toggle('header__is-hidden')
  })
  // step-2-3-4
  document.querySelectorAll('.description__step').forEach(function(descriptionStep) {
    descriptionStep.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.description__information-blocks').forEach(function(descriptionInformationBlocks){
        descriptionInformationBlocks.classList.remove('description__information-blocks-active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('description__information-blocks-active')
    })

    document.querySelectorAll('.description__step').forEach(function(descriptionStep) {
      descriptionStep.addEventListener('click',  function (event) {
        const path = event.currentTarget.dataset.path
        document.querySelectorAll('.description__step').forEach(function(descriptionStep) {
          descriptionStep.classList.remove('description__step-active')
      })
    })
    
       descriptionStep.addEventListener('click',  function (event) {
        event.currentTarget.classList.add('description__step-active')
       })

  })

    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
      },
  
      // Optional parameters
      loop: true,
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        clickable: true,
        allowSlideNext: true,
        allowSlidePrev: true,
        allowTouchMove: true,
      },
    });

    $( function() {
      $( ".questions__list" ).accordion({
        animate: true,
        active: false,
        collapsible: true,
        heightStyle: 'content', 
      });

    } );


    
  });
});

