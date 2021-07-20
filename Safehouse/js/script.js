$(document).ready(function() {

    $(".hero__slider").slick({
        arrows: true,
        prevArrow: $(".hero__slider-btn--prev"),
        nextArrow: $(".hero__slider-btn--next"),
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        dotsClass: "hero__slider-dots"
    });

    $(".tabs-items").children().click(function() {
        let tabsIndex = $(this).index();
        let tabsParent = $(this).closest(".tabs-main");
        let tabsBlocks = tabsParent.find(".tabs-blocks");
        tabsBlocks.children().each(function(index, el) {
            $(el).animate({
                "opacity": "0"
            }, 200);
            setTimeout(function() {
                $(el).removeClass("tabs-elem--open");
            }, 200);
        });
        tabsBlocks.children().eq(tabsIndex).animate({
            "opacity": "1"
        }, 200);
        setTimeout(function() {
            tabsBlocks.children().eq(tabsIndex).addClass("tabs-elem--open");
        }, 200);
    });

    $(".about-us__circle").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        draggable: false,
        fade: true
    });

    document.querySelector(".menu-btn").addEventListener("click", function() {
        this.classList.toggle("menu-btn--active");
        document.querySelector(".header-top__main-inner").classList.toggle("header-top__main-inner--open");
    });

    $(document).on("scroll", function() {
        if($(document).scrollTop() > $(".header-top").outerHeight() / 2) {
            $(".header-top").addClass("header-top--active");
            $(".header-top__logo").addClass("header-top__logo--active");
            $(".header-top__container").addClass("header-top__container--active");
            $(".header-top__main-inner").addClass("header-top__main-inner--center");
        }
        else {
            $(".header-top").removeClass("header-top--active");
            $(".header-top__container").removeClass("header-top__container--active");
            $(".header-top__logo").removeClass("header-top__logo--active");
            $(".header-top__main-inner").removeClass("header-top__main-inner--center");
        }
    });

    $(".consultation-block__input--number").mask("+999 (99) 999-99-99", {autoclear: false});

    $(document).click(function(e){
        let scrollTo = $(e.target).attr("data-scrollto");
        if(!scrollTo) return;
        e.preventDefault();
        let top = $(scrollTo).offset().top;
        let headerHeight = $(".header-top").outerHeight();
        $("html, body").animate({
            scrollTop: top - headerHeight + "px"
        }, 1000);
    });

});