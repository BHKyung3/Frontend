const person = {
    name: {
        firstName: "Gildong",
        lastName: "Hong"
    },
    likes: ["apple", "samsung"],
    printHello: function(){
        return "hello";
    }
};

console.log(person.name.firstName);
console.log(person["name"]["firstName"]); // 위, 아래 출력 값 동일하나 출력 방식 다름

console.log(person.name.lastName);
console.log(person["name"]["lastName"]); // 위, 아래 출력 값 동일하나 출력 방식 다름

console.log(person["likes"]["0"]); // 위에처럼 . 으로 출력 불가
console.log(person["likes"]["1"]);

console.log(person.printHello()); // 해당 방법으로 호출하는게 베스트 아래는 출력값은 같으나 복잡
console.log(person["printHello"]());


person.age = 20; // 추가 한다는 의미
console.log(person["age"]);

delete person["age"]; // 삭제 한다는 의미
console.log(person["age"]); 
