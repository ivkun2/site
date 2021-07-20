$(document).ready(function(){
    $(".testimonials__slider").slick({
        slidesToShow: 2,
        adaptiveHeight: true,
        dots: true,
        dotsClass: "slider-dots",
        nextArrow: '<div class="testimonials__slider-btn testimonials__slider-next"></div>',
        prevArrow: '<div class="testimonials__slider-btn testimonials__slider-prev"></div>',
        arrows: true,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    adaptiveHeight: false,
                    variableWidth: true
                }
            }
        ]
    });

    $(window).on("load resize", function() {
        if($(window).width() <= 992) {
            $(".services__row:not(.slick-initialized)").slick({
                adaptiveHeight: true,
                centerMode: true,
                arrows: false,
                variableWidth: true,
                dots: true,
                dotsClass: "slider-dots"
            });
        }
        else if($(window).width() > 992) {
            $(".services__row.slick-initialized").slick("unslick");
        }
    });

    $(".contact__form-select").selectric({
        responsive: true,
        nativeOnMobile: false
    });

    $(".header__menu-btn").click(function() {
        $(".header__menu").slideDown();
    });

    $(".menu__head-btn").click(function() {
        $(".header__menu").slideUp();
    });

});

