

var input = document.querySelector('#inputtext');
var list_ = [];

// 생성

input.addEventListener('keypress', function(e){   
    if( input.value != "" && e.keyCode == 13){
        list_ = [];
        gather_list();
        list_[list_.length] = input.value;
        input.value = "";
        print_list(list_);
    }
})

// 리스트 뽑아오기

function gather_list(){
    var current_list = document.getElementsByClassName("text");
    for(let i=0; i<current_list.length; i++){
        list_[i] = current_list[i].innerHTML;
    }
}

function print_list(list_){
    str = '';
    var append_ = document.querySelector("#here");
    for(var i=0; i<list_.length; i++){
        str += '<li><button class="delete" id="del'+i+'" onclick="delete_list(this.id)">x</button><input type="checkbox" class="toggle-checked"><span class="text"> ' + list_[i] +'</span></li>';
    } 

    append_.innerHTML = str;
}



function delete_list(clicked){
    var a = Number(clicked.replace('del', ''));
    list_.splice(a,1);
    print_list(list_);
}
