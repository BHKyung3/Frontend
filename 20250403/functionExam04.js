//  함수 표현식 - 화살표함수(람다함수) // function 제외 => 기재
const ramda = (num) => {
    return num*num;
};
result = ramda(8);
console.log(`합 결과 : ${result}`);
console.log("-----------------------------")

// 매개변수가 1개인 경우에만 () 중괄호 생략 가능
const ramda2 = num => {
// const : 가르키고 있는걸 수정하지 말라
    return num*num;
};
result = ramda(8);
console.log(`합 결과 : ${result}`);
console.log("-----------------------------")

// 중괄호 안 문장이 1개인 경우에는 중괄호 생략 가능
// 단, 중괄호 안 return 문장이 있으면 삭제 진행 필요
const ramda3 = num => num*num;
// const : 가르키고 있는걸 수정하지 말라(일편단심) let, var는 상관 없음음
// 참조하는 대상 자체를 변경하지 말라 ramda3 = num => num*num*num; 등을을 뒤에 기재할 경우 오류 발생

result = ramda(8);
console.log(`합 결과 : ${result}`);
console.log("-----------------------------")


