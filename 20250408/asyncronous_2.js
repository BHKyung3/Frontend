//      1. 콜백함수(Callback) 비동기 함수

function getData(Callback) { // (2) (1)에서 던져 Callback로 받음
    setTimeout(() => {Callback("콜백으로 처리한 데이터")}, 1000); // 1초 뒤에 값 노출
}
getData((result) => { // (1) 함수호출 => 람다함수로 표현 (1) -> (2)로 던진다 
    console.log(result); // 콜백으로 처리한 데이터 내용을 1초 뒤 노출
})

