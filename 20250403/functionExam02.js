// 함수 선언
function gugudan(num) {
    console.log("기본함수 : ");
    for(let i = 1; i <= 9; i++) {
        console.log(`${num}*${i}=${num*i}`);
    }
};
gugudan(5);
console.log("-----------------------------")

// 함수 표현식
const gugu = function gugudan2(num) {
    console.log("함수표현식 : ");
    for(let i = 1; i <= 9; i++) {
        console.log(`${num}*${i}=${num*i}`);
    }
};
gugu(7);
console.log("-----------------------------")

//  함수 표현식 - 익명함수 // 
const gugu2 = function (num) {
    console.log("익명함수 : ");
    for(let i = 1; i <= 9; i++) {
        console.log(`${num}*${i}=${num*i}`);
    }
};
gugu2(9);
console.log("-----------------------------")
//  함수 표현식 - 화살표함수(람다함수) // function 제외 => 기재재
const gugu3 = (num) => {
    console.log("화살표함수 : ");
    for(let i = 1; i <= 9; i++) {
        console.log(`${num}*${i}=${num*i}`);
    }
};
gugu3(8);
console.log("-----------------------------")
