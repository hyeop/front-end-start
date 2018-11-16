var uri = 'https://dapi.kakao.com/v2/search/web';
var appkey = '2d0cf470a7811dc9f4cfaa1c9758e24a';
var query = '제주대학교';
var inst;


document.querySelector('.search > .inputtext').addEventListener('keypress', events =>{                  
   
    var search = events.target.value;                       // inputtext 입력 값 받아오기

    if(events.keyCode == 13 && search.trim() !== ''){       // 공백 입력 방지
        let inst = new search_content(appkey, search);      // search_content(appkey, search) 함수사용
        inst.container.innerHTML = '';                      // container 초기화시킴
        inst.getData();                                     // inst 는 블럭 형태이다
        if(inst.morebutton.style.display !== 'block'){      // inst 의 더보기 버튼이 block 상태가 아니라면 block 을 시킨다
            inst.morebutton.style.display = 'block';
        }
        let button = inst.morebutton.querySelector('button');   // button 요소를 불러 button 오브젝트에 저장 
        button.addEventListener('click', inst.getData);         // button 을 클릭했을 때 inst.getData 실행한다
    }
});



class search_content{

    constructor(appkey, query){                     // 생성자이며, 밑의 내용은 생성자의 특징 즉 , inst 각각의 특징을 기입
        this.query = query;                         // 사용자가 입력한 정보
        this.count = 1;                             // Page 번호
        this.size = 20;                             // 20 개의 정보씩
        this.url = `https://dapi.kakao.com/v2/search/web?query=${query}`;       // 요청할 명령 하지만, 인증이 필요하다.
        this.options ={
            method : 'GET',
            headers:{
                'Authorization' : `KakaoAK ${appkey}`,
            }
        };                                                          // 패킷 정보 입력, Get 방식으로 그리고 header 에 인증키 입력
        this.list = [];                                             // 리스트를 만든다.
        this.container = document.querySelector('.container');      
        this.morebutton = document.querySelector('.content');
        this.isEnd = false;                                         // 끝기본적으로 false로 만들어줌
        this.getData = this.getData.bind(this);
    }

    renderItem(item){
        
        let date = new Date(item.datetime);         
        let hour = date.getHours();
        let min = date.getMinutes();

        if(parseInt(hour / 10 )== 0){
            hour = '0' + hour;
        }
        if(parseInt(min / 10 )== 0){
            min = '0' + min;
        }
        let dateToString =`
        ${date.getFullYear()}년 
        ${date.getMonth() + 1}월 
        ${date.getDay() + 1}일 
        ${hour} : ${min}`;                                        // content 의 날씨를 표현

        let block = document.createElement('div');                      // block 생성 부분
        block.className = 'block';
        block.innerHTML = `
        <br>
            <div class = 'title'>
                <a href = '${item.url}'>${item.title}</a>
            </div>
            <hr><br>
            <div class='contents_text'>${item.contents}</div>
            <br><hr>
            <div class='datetime'>${dateToString}</div>
           
        `;
        
        return block; 
    }


    async getData () {                                          // async ?
        try{
            if(!this.isEnd){                                    // 끝이 아니라면
                let res = await fetch(`${this.url}&page=${this.count}&size=${this.size}`, this.options);            
                        // await ?  fetch, url 과 인증부분 건내줌
                let data = await res.json();        // res 의 json 정보를 넘겨준다.
                
                this.isEnd = data.meta.is_end;          // is_end 라는 정보가 있는건가?
                if(data.documents){                     // documents
                    data.documents.map(item =>{
                        this.container.appendChild(this.renderItem(item));
                    })                  //map?
                } else {
                    this.container.innerText = "No Result";
                    this.morebutton.style.display = "none";
                }
                this.count++;               // count 해서 20이 되면 나감
            }
        } catch(err){
            console.log(err);
        }

    }
}
