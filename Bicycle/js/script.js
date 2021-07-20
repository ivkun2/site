$(document).ready(function() {
    $(".twitter-slider__body").slick({
        dots: true,
        adaptiveHeight: true,
        dotsClass: "slider-dots",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });
    $(".header__menu-btn").click(function() {
        $(this).toggleClass("header__menu-btn--open");
        $(".header__nav").toggleClass("header__nav--open");
    });
});