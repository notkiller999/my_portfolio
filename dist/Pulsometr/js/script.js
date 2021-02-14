

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true,
    navPosition: 'bottom',
    autoHeight: false
  });
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

(function($) {
$(function() {
  
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });



  function toggleSlide(item) {
      $(item).each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  })    
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
  
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });



  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });

  $('.button_catalog').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__subtitle').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });
});    
    function valideForm(form) {
     $(form).validate({
      rules: {
        name: 'required',
        phone: 'required',
        email: {
          required: true,
          email: true
        }
      },
        messages: {
          name: "Пожалуйста введите своё имя",
          phone: "Пожалуйста введите свой номер телефона",
          email: {
            required: "Пожалуйста введите свою почту",
            email: "Почта должна быть в формате name@domain.com"
          }
        }
      });
    };
    valideForm('#order form');
    valideForm('#consultation-form');
    valideForm('#consultation form');

    $('input[name=phone]').mask("+38 (999) 999-9999");

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');


        $('form').trigger('reset');
      });
      return false;
    });

    
    wow = new WOW({
      boxClass:     'wow',      // default
      animateClass: 'animate__animated', // default
      offset:       100,          // default
      mobile:       true,       // default
      live:         true        // default
    })
	wow.init();
	
	  $(window).scroll(function() {
      if ($(this).scrollTop() > 1200) {
        $('.pageup').fadeIn('slow');
      } 
      else {
        $('.pageup').fadeOut('slow');
      }
    });
     $("a[href^='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
     });
})(jQuery);
