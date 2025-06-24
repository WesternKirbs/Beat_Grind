let slick_on = false;
function slick_toggle() {
    if (window.innerWidth <= 768) {
        if (!slick_on) {
            $(".pcourse_cards").slick(
                {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    variableWidth: true,
                    focusOnSelect: true,
                });
            slick_on = true;
        }
    } else {
        if (slick_on) {
            $(".pcourse_cards").slick('unslick');
            slick_on = false;
        }
    }
}

function show_a() {
    if (slick_on) {
        $('.slick-slide a').css('display', 'none');
        $('.slick-center a').css('display', 'block');
        $('.slick-slide .overlay').css('background', '');
        let cur_slide = $('.slick-center');
        if (cur_slide.hasClass('punch'))
            $('.slick-center .overlay').css('background', '#827C02');
        else if (cur_slide.hasClass('kick'))
            $('.slick-center .overlay').css('background', '#197817');
        else if (cur_slide.hasClass('lift'))
            $('.slick-center .overlay').css('background', '#8D122C');
        else if (cur_slide.hasClass('yoga'))
            $('.slick-center .overlay').css('background', '#89269E');
    } else {
        $('.pcourse_cards div .overlay').css('background', '');
        $('.pcourse_cards div a').css('display', 'block');
    }
}

$(function () {
    slick_toggle();
    show_a();

    $(window).on('resize', function () {
        slick_toggle();
        show_a();
    });
    
    $('.pcourse_cards').on('afterChange', function (e, s, d) {
        show_a();
    });

});