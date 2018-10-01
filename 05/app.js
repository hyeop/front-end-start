console.log('app.js');






function json(){
    fetch('https://1boon.kakao.com/ch/enter.json?page=1&pagesize=20')
    .then(function(response){
        response.json().then(function(data){
        console.log('json data:',data);
       // document.getElementById("name").innerHTML = data;
        });
    })
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}

function jsonp(){

    var head = document.querySelector('head');
    var script = document.createElement('script');
    script.src = 'jsonp.js';
    head.appendChild(script);
}

function callback(data){

    console.log(data);
}
json();
jsonp();