function show_all_menulist() {
    return function () {
        section = $(this).attr('id');
        url = api + section + `.json?page=${page}&pagesize=4`;
        getUrlData(url, print);
    };
}

