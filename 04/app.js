var wrap = document.querySelector('.wrap');
var ch, str = '';

var j =0;
for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
        str += `<div class='${(i + j) % 2 == 1 ? 'b' : 'w'}'></div>`;
    }
}
wrap.innerHTML = str;
var blocks = document.querySelectorAll('.wrap > div');
var selectDom = null;

function select(event) {
    
    if(selectDom){
        selectDom.className = selectDom.className.replace("yellow","");
    }
    selectDom = event.currentTarget;
    selectDom.className += " yellow";
    console.log(selectDom.className);
}

for(var i =0; i< 16; i++){
    blocks[i].addEventListener('click',select);
}



