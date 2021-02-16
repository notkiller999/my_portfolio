const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeMenu = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeMenu.addEventListener('click', () => {
    menu.classList.remove('active'); 
});
const percents = document.querySelectorAll('.using__skills-percent'),
    lines = document.querySelectorAll('.using__skills-progress_active');
percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('scroll_up_active');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('scroll_up_active');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.scroll_up');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();