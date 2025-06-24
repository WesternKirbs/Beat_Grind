var lastWindowWidth;
$(function () {
    let burger_on = false;
    let plus_on = false;
    let sub = $('.header nav.menu ul li:nth-of-type(2) div.plus');
    let course = $('.header .menu ul li:nth-of-type(2) a');
    
    $('.burger a').on('click', function (e) {
        e.preventDefault();
        if (burger_on) {
            $('.header nav.menu').css('display', 'none');
            burger_on = false;
        } else {
            $('.header nav.menu').css('display', 'block');
            $('.header .submenu').css('display', 'none');
            plus_on = false;
            burger_on = true;
        }
    });
    sub.on('click',function(e){
        if(plus_on){
            $('.header .submenu').css('display', 'none');
            plus_on = false;
        } else {
            $('.header .submenu').css('display', 'inline-block');
            plus_on = true;
        }
    });
    $(window).on('resize', function () {
        var windowWidth = window.innerWidth;
        if (lastWindowWidth > 768 && window.innerWidth <= 768) {
            burger_on = false;
            $('.header nav.menu').css('display', 'none');
        } else if(window.innerWidth > 768 && lastWindowWidth <= 768) {
            burger_on = false;
            $('.header nav.menu').css('display', 'block');
            $('.header .submenu').css('display', 'none');
        } 
        lastWindowWidth = windowWidth;
    });
});