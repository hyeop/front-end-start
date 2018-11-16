var api = 'https://1boon.kakao.com/ch/';
var page = 1;
var pagesize = 12;
var section;
var url;
var state = 0;                          /* state 0, 1, 2 가 있습니다.
                                            state 0 : 초기화면 요구시
                                            state 1 : 특정 section 요구시
                                            state 2 : 'more' 버튼 요구시
                                            로 나눠서 코딩했습니다. */
var $menu = $('.menu > ul > li');                                            
$('#choice_section').hide();

$menu.each(show_all_menulist());
$(window).on('scroll', adjust_active_by_scroll());  // 스크롤 할때마다 Active 되는 Section을 변경해준다.
$menu.on('mouseenter',menu_enter());     // 마우스를 올려놨을 경우 active를 이동하면서 창을 이동해준다.
$menu.on('click', menu_click());      // 메뉴(트렌딩, 이슈, 엔터) 선택 시 
$('#more_button').on('click', morebutton_click());                              