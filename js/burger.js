$(document).ready(function() {
    $('.header__burger,.menu__link').click(function(event) {
       $('.header__burger,.header__menu').toggleClass('active');
       $('body').toggleClass('lock');
    });
});