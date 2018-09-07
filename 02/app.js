
console.log("1번 문제 (1부터 100까지 출력)");

for(var i=1; i<101; i++)
    console.log(i);


console.log("2번 문제 (1부터 100까지 홀수 출력)");    

for(var j=1; j<101; j++){
    if(j % 2 == 1)
        console.log(j);
}


console.log("3번 문제 (구구단 출력)");    

for(var k=2; k<10; k++){
    for(var n=1; n<10; n++){
        console.log(k+' * '+n+' = '+k*n);
    }
}

var result = 0;
var box = 0;
for(var j=1; ;j++){    
    box = prompt(j + '번째 숫자를 입력하세요');
    if(box != null) result += parseInt(box);
    else if(box == null) break;
}
prompt("입력하신 수들의 합은 "+result+" 입니다.");

