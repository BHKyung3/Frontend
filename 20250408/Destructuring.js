/*
    구조분해 할당 : 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식
     ㄴ 개발을 하다 보면 함수에 객체나 배열을 전달해야 하는 경우가 생기곤 한다.
     가끔은 객체나 배열에 저장된 데이터 전체가 아닌 일부만 필요한 경우가 생기기도 한다.
     이럴 때 객체나 배열을 변수로 '분해’할 수 있게 해주는 특별한 문법인
     구조 분해 할당(destructuring assignment) 을 사용할 수 있다.
*/

let arr = [1, 2, 3]; // 요기는 예시

let one = arr[0]
let two = arr[1]
let three = arr[2]
console.log(one, two, three);

arr = [10, 20, 30]; // 요기가 구조분해 할당 [10, 20, 30] => 배열
[one, two, three] = arr; //[one, two, three] = arr; => 변수명
console.log(one, two, three);

const func = (a, b, c) => {
    console.log(a, b, c);
}
func(7, 8, 9); // 함수 호출

arr = [17, 18, 19] // 전달할 값음 배열에 들어 있음
func(arr[0], arr[1], arr[2])

console.log("-------------");

/*const fund = ({name:n, age:a, location:l}) => {
    console.log(n, a, l); ==> ":" 사용하여 애칭을 주어 사용도 가능
} */
const fund = ({name, age, location}) => { // (1)
    console.log(name, age, location);
}

let person = {
    name : "홍길동",
    age : 20,
    location : "천호"
};
fund(person); // const fund = ({name, age, location}) ==> {} 기재 시 사용 코드

// const fund = (name, age, location) => (1)에 해당하는 부분
//  ==> {}가 없을 경우 fund(person.name, person.age, person.location); 로 기재하여 출력