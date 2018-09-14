var dom = document.getElementById('debug');

console.log(dom);


var dom2 = document.querySelectorAll('#debug');
var dom3 = document.querySelectorAll('div');

console.log(dom2);
console.log(dom3);

/*var all = $$('ul');
var length = all.length;
for(var i=0; i < length; i++){
  all[i].style.border = '1px solid red';
}*/

var div = document.createElement('div');
div.style.border = "1px solid red";
div.innerHTML = "<h3>ddddd</h3>";           
document.body.appendChild(div);


/*
var head = document.querySelector('head');   // 해당 태그를 불러온다
var script = document.createElement('script');   // 태그 생성
script.src = "app.js";                          // 태그 속성 지정이랑 비슷하게하면됨
head.appendChild(script); 
*/

var body = document.querySelector('body');
var button = document.createElement('button');
button.type = "button";
button.id = "btn";
button.innerHTML = "다음";
body.appendChild(button);