// 함수 선언, 구구단 누적
function gugudan(num) {
    console.log("기본함수 : ");
    let sum = 0;
    for(let i = 1; i <= 9; i++)
        sum += num*i;
        return sum;
};
result = gugudan(2);
console.log(`합 결과 : ${result}`);
console.log("-----------------------------")

// 함수 표현식
const gugu = function gugudan2(num) { // // const가 아닌 let 사용 가능
    console.log("함수표현식 : ");
    let sum = 0;
    for(let i = 1; i <= 9; i++)
        sum += num*i;
        return sum;
};
result = gugu(7);
console.log(`합 결과 : ${result}`);
console.log("-----------------------------")

//  함수 표현식 - 익명함수 // 
const gugu2 = function (num) {
    console.log("익명함수 : ");
    let sum = 0;
    for(let i = 1; i <= 9; i++) {
        sum += num*i;
    }
    return sum;
};
result = gugu2(9);
console.log(`합 결과 : ${result}`);
console.log("-----------------------------")
//  함수 표현식 - 화살표함수(람다함수) // function 제외 => 기재재
const gugu3 = (num) => {
    console.log("화살표함수 : ");
    let sum = 0;
    for(let i = 1; i <= 9; i++) {
        sum += num*i;
    }
    return sum;
};
result = gugu3(8);
console.log(`합 결과 : ${result}`);
console.log("-----------------------------")
