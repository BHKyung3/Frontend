
/* 즉시 실행 함수 : 함수를 선언하자마자 즉시 실행하는 함수를 의미
    (변수의 범위를 지역화하거나, 전역 네임스페이스 오염을 방지하는 데 사용)
    즉시 실행 함수는 함수 표현식을 소괄호 ( )로 감싸고, 그 뒤에 ()를 붙여서 실행
*/ 

// ↓ 이름이 있는 즉시 실행 함수
( 
    function init() {
        console.log("initialized");
    }
)();

// ↓ 익명 즉시 실행 함수
(
    function () {
        console.log("initialized");
    }
)();

/* const func = (function() {
    function a() {
        console.log("aaaaa");
    }
    function b() {
        console.log("bbbbb");
    }
})(); 실행 되지 않음 */

const func = (function() {
    function a() {
        console.log("aaaaa");
    }
    function b() {
        console.log("bbbbb");
    }
    return {
        funcA: a,
        funcB: b,
    }
})();

func.funcA(); // func 객체에서 funcA()와 funcB() 메서드를 호출
func.funcB();

const result = (function(a, b){
    function init(){        // init() 내부함수는 doSum(a, b)를 호출하는 역할
        return doSum(a, b); // doSum()은 단순히 두 숫자의 합을 반환하는 함수
    }
    function doSum(a, b){
        return a + b;
    }
    return init(); // init()은 다시 doSum(a, b)를 호출하고, 결과적으로 10 + 20 = 30을 반환
}) (10, 20);
console.log(result);