function morebutton_click() {
    return function () {
        state = 2;
        page++;
        url = api + section + `.json?page=${page}&pagesize=${pagesize}`;
        $('#more_button').hide(500);
        $('#more').fadeIn(500).delay(1500).slideUp('fast', function () {
            getUrlData(url, print);
        }).hide(500).slideUp('slow', function () {
            $('#more_button').fadeIn(1000);
        });
    };
}
