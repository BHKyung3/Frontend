/*
    스프레드(spread) 연산자 : ...?? 으로 표현 : 배열이나 객체를 확장하거나 펼치는데 사용
     ㄴ 복사하고자 하는 변수나 상수를  앞에 '...'을 붙여주면 복사하고자 하는 배열의 값들이 담기게 됨
*/

let arrA = [1, 2, 3];
let arrB = [...arrA, 4, 5, 6];
let arrC = [4, 5, 6, ...arrA];

console.log(arrB);
console.log(arrC);

let objA = {
    a : 1,
    b : 2,
};
let objB = {
    ...objA,
    c : 3,
    d : 4,
};
console.log(objB);

/*
function func(a, b, c) {
    console.log(a, b, c);
} ==> 아래와 같은 의미
*/
let func = (a, b, c) => console.log(a, b, c); // 요기랑 같은 의미

let arr = [10, 20, 30];

func(...arr); // func(10, 20, 30)

console.log("-------------");

/*
    rest 매개 변수 : 스프레드(spread) 연산자 반대 개념 => ...rest 말고 다른 이름을 사용해도 무관하긴 함
     ㄴ 정해지지 않은 개수의 인자를 배열로 받는 문법
    먼저 선언된 매개변수에 할당된 전달인자를 제외한 나머지 전달인자들이 모두 배열에 담겨 할당
    함수에 몇 개의 인자가 올지 미리 모를 때 매우 유용하게 쓰이는 기능
    rest parameter는 반드시 마지막 매개변수여야 한다.
*/

let fun2 = (...rest) => console.log(rest);

fun2(1, 2, 3);
fun2(1, 2, 3, 4);
fun2(1, 2, 3, 4, 5);

/* let fun2 = (...rest) => {
    let sum = 0;
    rest.forEach(i => sum += i);
    console.log(sum;)
}
fun2(1, 2, 3); */

console.log("-------------");

function introduce(name, age, ...hobbies) {
    console.log(`이름: ${name}`);
    console.log(`나이: ${age}`);
    console.log(`취미: ${hobbies.join(`,`)}`);
}
introduce("지민", 25, "독서", "게임", "요리")

console.log("-------------");
let fun3 = (param, ...rest) => { // param 인자 하나를 받는 일반 매개변수, ...rest 나머지 인자들을 배열로 수집하는 rest 매개 변수
    console.log(param); // 첫 번째 인자 출력
    console.log(rest); // 나머지 인자들을 배열로 출력
}
fun3(1, 2, 3);
fun3(1, 2, 3, 4);
fun3(1, 2, 3, 4, 5, 6);