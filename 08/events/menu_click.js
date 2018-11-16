function menu_click() {
    return function (event) {
        pagesize = 12;
        page = 1;
        section = event.currentTarget.id;
        $('.active').removeClass("active");
        $(this).addClass("active");
        $('#list').fadeOut(1000);
        $('#choice_section').hide();
        $('#choice_section > .container').html('');
        $('#choice_section').fadeIn(1000);
        url = api + section + `.json?page=${page}&pagesize=${pagesize}`;
        getUrlData(url, print);
        state = 1;
        $(window).animate({ scrollTop: 0 }, 500);
    };
}