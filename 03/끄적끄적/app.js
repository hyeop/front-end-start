(function test(){
    var i = 0 , sum = 0;
    while(1){
        var result = prompt(++i + " 번째 숫자를 입력하세요");
        if(!result) break;
        sum += parseInt(result);
    }
    confirm("입력하신 숫자의 합은 " + sum + "입니다")
})();



//window.open("https://www.daum.net", '', 'width=300, height=300');

//location.href = "www.naver.com";
// location.reload();
//history.back();
// history.go(1); 
