function menu_enter() {
    return function (event) {
        if (state == 0) {
            section = $(this).attr('id');
            $('.active').removeClass("active");
            $(this).addClass("active");
            $('html').animate({ scrollTop: $(`.${section}_con`).offset().top - $('#list').offset().top * 1.7 }, 500);
        }
    };
}
