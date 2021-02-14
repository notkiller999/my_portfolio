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