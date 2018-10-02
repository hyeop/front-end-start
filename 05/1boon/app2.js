var page = 1;
var url = 'https://1boon.kakao.com/ch/enter.json?page='+page+'&pagesize=10';
var str_left = '';
var str_main = '';
var str_button = "<button id='more' onclick='pageup()'>더보기</button>";
var select = 0;
var k = 0;

getUrlData(url, print);

function print(json) {
  for (var i = 0; i < json.data.length; i++) {
    var img = json.data[i].img;
    str_left += `<div class="drop" id="img`+ (k++) +`"onmouseenter="get_index(this.id)"><img src="${img}"></div><br>`;  
  }
  document.querySelector('.side').innerHTML = str_left + str_button;
}

function print_main(json) {
  
  img = json.data[select].img;
  var title = json.data[select].title;
  var path = json.data[select].path;
  str_main = `<img src="${img}"><br><a href="http://1boon.kakao.com/${path}" target="_blank">${title}</a>`;
  document.querySelector('.drop_content').innerHTML = str_main;
}

function get_index(index_){
  select = Number(index_.replace('img',''));
  var print_page = parseInt(select / 10) + 1;
  console.log(print_page);
  select = select % 10;
  url = 'https://1boon.kakao.com/ch/enter.json?page='+ print_page +'&pagesize=10';
  getUrlData(url, print_main);
}


function getUrlData(url, callback) {
  fetch(url)
    .then(function(response) {
      response.json().then(function(data) {
        callback(data);
      });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}


function pageup(){
    page++;
    url = 'https://1boon.kakao.com/ch/enter.json?page='+page+'&pagesize=10';
    getUrlData(url, print);
}