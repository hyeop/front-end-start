var page = 1;
var url = 'https://1boon.kakao.com/ch/enter.json?page='+page+'&pagesize=10';

getUrlData(url, print);

function print(json) {
  console.log(json);

  var str = '';

  for (var i = 0; i < json.data.length; i++) {
    var title = json.data[i].title;
    var path = json.data[i].path;
    str += `<a href="http://1boon.kakao.com/${path}" target="_blank">${title}</a><br>`;  
  }

  document.getElementById('wrap').innerHTML = str;
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


document.getElementById('more').onclick=function(){
    page++;
    getUrlData(url, print);
}