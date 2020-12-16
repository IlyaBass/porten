$(function () {

    // ibg
    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }
    ibg();
    // /ibg

    // Плавная прокрутка к якорю================================================
    let $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - $('.header').height()
        }, 700);
        return false;
    });
    // /Плавная прокрутка к якорю================================================

    $('.header__search').click(function (e) {
        if ($('.header__input').css('display') == 'none') {
            $('.header__input').show();
            $('.header__input-overflow').show();
            return false;
        }
        else {
            $('.header__input').hide();
        }
    });
    $('.header__input-overflow').click(function () {
        $('.header__input').hide();
        $(this).hide();
    });

    $('.header__burger').click(function () {
        $('.header__burger-menu').slideDown();
        $('body').addClass('lock');
    });
    $('.header__burger-overflow').click(function () {
        $('.header__burger-menu').slideUp();
        $('body').removeClass('lock');
    });


});