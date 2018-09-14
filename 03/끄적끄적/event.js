


window.addEventListener('keypress', function(){
    alert("Don't Press Key");
});


window.addEventListener('click', opendaum());
function opendaum(event) {
    return function () {
        var btn = document.querySelector('#btn');
        if (btn) {
            console.log(event);
            window.open("http://m.daum.net", '', "width=500, height=500");
        }
    };
}
// addEventListener 1: type , 2 : function