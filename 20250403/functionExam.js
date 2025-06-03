// 함수 선언
function gugudan() {
    console.log("기본함수 : ");
    for(let i = 1; i <= 9; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
};
gugudan();
console.log("-----------------------------")

// 함수 표현식
const gugu = function gugudan2() { // const, let, var 사용 가능
    console.log("함수표현식 : ");
    for(let i = 1; i <= 9; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
};
gugu();
console.log("-----------------------------")

//  함수 표현식 - 익명함수 // 
const gugu2 = function () {
    console.log("익명함수 : ");
    for(let i = 1; i <= 9; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
};
gugu2();
console.log("-----------------------------")
//  함수 표현식 - 화살표함수(람다함수) // function 제외 => 기재 // java에서는 -> 화살표로 표시
const gugu3 = () => {
    console.log("화살표함수 : ");
    for(let i = 1; i <= 9; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
};
gugu3();
console.log("-----------------------------")
