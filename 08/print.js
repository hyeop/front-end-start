function print(json) {

    let str ='';
    let key = json.data[0].channelKey;                               
   
    for (let i = 0; i < json.data.length; i++) {
        let paginginfo = json.pagingInfo.hasNext;   // 다음 페이지 유무를 검사
        let title = json.data[i].title;
        let coverImage = json.data[i].coverImage;
        let path = json.data[i].path; 
        let totalView = json.data[i].totalView;
            
        str +=`
            <div class='contents'>
                <div class='coverimage'><a href='https://1boon.kakao.com/${path}'><img src=${coverImage}></a></div>
                <div class='title'><a href='https://1boon.kakao.com/${path}'>${title}</a></div>
                ${totalView} views
            </div>`;
            
        if(!paginginfo){
            $('#more_button').hide();           // 다음 page가 없으면 더보기 단추를 숨긴다.
        }
    }
    if(state == 0){
        $(`.${key}_con`).html(str);
    }else{
        $('#choice_section > .container').append(str);
        if(state == 2){
            $('html').animate({ scrollTop : $(document).height()-$(window).height()}, 2000);
        }
    } 
}
