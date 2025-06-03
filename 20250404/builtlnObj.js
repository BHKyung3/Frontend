const email = "test!naver.com";

console.log(email.indexOf("@"));

let today = new Date();
console.log(today); // 시간 나옴

let nowMonth = today.getMonth();
console.log(nowMonth+1); // 월을 구하러면 +1 진행 필수수

let nowData = today.getDate();
console.log(nowData);       // 일

let nowDay = today.getDay();
console.log(nowDay);        // 요일
console.log("--------------")

let old = new Date('2025-3-30');

let nowMonth1 = old.getMonth();
console.log(nowMonth1+1); // 월을 구하러면 +1 진행 필수수

let nowData1 = old.getDate();
console.log(nowData1);       // 일

let nowDay1 = old.getDay();
console.log(nowDay1);        // 요일

