$(document).ready(function() {

    document.querySelector(".menu-btn").addEventListener("click", function() {
        this.classList.toggle("menu-btn--active");
        document.querySelector(".header__menu-inner").classList.toggle("header__menu-inner--active");
    });

    $(document).on("scroll", function() {
        if($(document).scrollTop() > $(".header-top").outerHeight()) {
            $(".header-top").addClass("header-top--active");
            $(".header-top__inner").addClass("header-top__inner--active");
        }
        else {
            $(".header-top").removeClass("header-top--active");
            $(".header-top__inner").removeClass("header-top__inner--active");
        }
    });

    function scrollAnim() {
        let docPos = $(document).scrollTop();
        $(".scroll-anim, *[data-anim-num]").each(function(i, item) {
            let elem = $(item);
            let elemPos = ($(item).offset().top - $(window).height()) + elem.outerHeight() / 4;
            if( docPos >= elemPos ) {
                if(elem.hasClass("scroll-anim")){
                    elem.removeClass("scroll-anim")
                }
                else if(elem.is("[data-anim-num]")) {
                    elem.prop("count", 0).animate({
                        count: +elem.text()
                    }, {
                        duration: +elem.attr("data-anim-num"),
                        step: function(i) {
                            elem.text(Math.ceil(i));
                        }
                    })
                    elem.removeAttr("data-anim-num");
                }
            }
        });
    }
    scrollAnim();
    $(document).scroll(scrollAnim);
    

});