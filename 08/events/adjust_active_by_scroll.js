function adjust_active_by_scroll() {
    return function () {
        if (state == 0 && $(window).width() < 1180) {
            var issue_height = $('.issue_con').offset().top;
            var interval = issue_height - $('.trending_con').offset().top;
            // 하나의 section 의 절반크기를 기준으로 현재 sector를 파악한다
            var rigid = interval / 2;
            var height = $(window).scrollTop() + $('#list').offset().top; // sticky 값을 생각해준 값
            if (height > issue_height + rigid) {
                $('.active').removeClass("active");
                $('#enter').addClass("active");
            }
            else if (height >= issue_height - rigid && height <= issue_height + rigid) {
                $('.active').removeClass("active");
                $('#issue').addClass("active");
            }
            else {
                $('.active').removeClass("active");
                $('#trending').addClass("active");
            }
        }
    };
}
