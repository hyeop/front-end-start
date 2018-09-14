

//"3번 문제 (구구단 출력)";    
function gugudan(num){
   // for(var k=2; k<10; k++){
    console.log(num + '단');
    for(var n=1; n<10; n++){
        console.log(num+' * '+n+' = '+num*n);
    }
   // }
}
alert(1);
for(var i = 2; i<10; i++){
    gugudan(i);
}


var name = "global";
function test() {
  console.log(name);
  var name = "local";
  console.log(name);
}