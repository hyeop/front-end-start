//document.querySelector('h1');



// var $div = $('div');

// // $('h1').html('hi');
// // $('h1').innerhtml = '111';
// $('h1').fadeOut().delay(1000).fadeIn();

// $div
//     .css("background-color","yellow")
//     .css("border", "10px solid red");

// 인자.height    .position         .addClass()

//$('div').toggleClass("red");

// var data = document.querySelector("#btn");

// var $btn = $('#btn');
// var $txt = $('#txt');
// var $debug = $('#debug');
// $btn.on('click', function(event){
//     console.log('click');
//     $('h1').hide('slow');
 
//     $debug.html($txt.val());
// });

// 특정 방향
// animate > 백그라운드 칼라 스무스하게 바꾸거나

var $up = $('#up');
var $window = $(window);
$window.on('scroll', function(event){
    var scrollTop = $window.scrollTop();
    if(scrollTop > 100){
        $up.fadeIn(500).delay(1000).fadeOut(500);
    }
});
$up.click(function(event){
    $('html , body').animate({ scrollTop : 0 }, 3000);
});


// $('.wrap').on('click', 'div', function(event){
//     $(event.target).fadeOut();
// })


// api animate 부분 

