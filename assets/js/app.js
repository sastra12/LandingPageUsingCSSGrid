const mobileMenu = document.querySelector('.mobile-menu');
// console.log(mobileMenu);
const menu = document.querySelector('.menu');
// console.log(menu);
mobileMenu.addEventListener('click', function () {
    menu.classList.toggle('show');
})