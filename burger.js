$(function () {
    let burger_on = false;
    $('.burger a').on('click', function (e) {
        e.preventDefault();
        if (burger_on) {
            $('.header nav.menu').css('display', 'none');
            burger_on = false;
        } else {
            $('.header nav.menu').css('display', 'block');
            burger_on = true;
        }
    });
    $(window).on('resize', function () {
        if (window.innerWidth <= 768) {
            burger_on = false;
            $('.header nav.menu').css('display', 'none');
        } else {
            burger_on = false;
            $('.header nav.menu').css('display', 'block');
        }
    });
});