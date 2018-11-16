var box = document.querySelector('#box');
var bugWidth = 20;
var wrapWidth = 300;
var score = 0;
var ex_score = score;
var life = 10;
var bugspeed = 3000;

function move(){
    document.getElementById("box").style.display ='block';
    var top = random(wrapWidth-bugWidth);
    var left = random(wrapWidth-bugWidth);
    box.style.top = top + 'px';
    box.style.left = left + 'px';
    if(ex_score == score){
        life --;
        document.querySelector('#life').innerHTML = life;
    }
    if(score == 2){
        bugspeed = 1000;
    }
    ex_score = score;
}
setInterval(move, bugspeed);
box.addEventListener('click', addPoint);
function addPoint(){
    score++;
    document.querySelector('#score').innerHTML = score;
    document.getElementById("box").style.display ='none';
}




function random(max){
    return Math.floor(Math.random() * max);
}
