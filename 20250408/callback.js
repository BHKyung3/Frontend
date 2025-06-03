/*
    콜백 함수!! : 함수 자체를 전달하는 함수 - >다른 함수에 인자로 전달되어 나중에 호출되는 함수
    - 내가 너한테 함수를 줄 테니까, 네가 나중에 원할 때 불러줘! → 이게 바로 콜백 함수!
    - 자바에서는 콜백 함수 대신 인터페이스를 전달하거나, **람다식(Java 8 이상)**을 사용
     ㄴ 사용하는 이유 : 코드 실행 순서를 제어하고, 유연하게 동작을 확장하기 위해

     콜백 함수 외에 함수, 익명함수, 람다함수, 즉시실행함수 등이 있다.
*/
(function(){
    console.log("--------------")
})(); // 즉시실행함수

function parentFunc(callback){
    console.log("parent")
    callback(); // 콜백 함수 호출 : 변수에 함수를 전달하기 위함
}
function childFunc() {
    console.log("child") // callback -> child를 참조하고 있음
} 
parentFunc(childFunc);

console.log("--------------")

// 사용하는 이유 : 간략한 표현
function repeatDouble(count) {
    for(let i=0; i<count; i++){
        console.log((i+1)*2);
    }
}

repeatDouble(5); // +2씩 5번 기재
console.log("--------------")

function repeatThree(count) {
    for(let i=0; i<count; i++){
        console.log((i+1)*3);
    }
}
repeatThree(5); // +3씩 5번 기재

console.log("--------------")

function repeatAll(count, callback) {
    for(let i=0; i<count; i++){
        callback(i+1);
    }
}

function origin(count) {
    console.log(count);
}
repeatAll(5, origin);
repeatAll(5, (count)=>console.log(count)) // 람다표현으로도 사용 가능(위에랑 같은 값 출력)

console.log("--------------")

function donble(count) {
    console.log(count*2); // +2씩 5번 기재
}
repeatAll(5, donble);
repeatAll(5, (count)=>console.log(count*2)) // 람다표현으로도 사용 가능(위에랑 같은 값 출력)

console.log("--------------")

function three(count) {
    console.log(count*3); // +3씩 5번 기재
}
repeatAll(5, three);
repeatAll(5, (count)=>console.log(count*3)) 