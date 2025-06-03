/*      1. 프로미스(Promise) 비동기 함수 => 바동기 작업을 더욱 깔끔하게 처리할 수 있도록 해준다.
        성공 시 .then()으로 처리 // 실패 시 .catch 처리된다.
*/

function getData() {
    return new Promise((resolve, reject) => {  // resolve 성공, reject 실패
        setTimeout(() => {
            // resolve('Promise로 처리한 데이터'); // 성공 시 해당 값 노출
            reject("error 발생함!"); // 실패 시 해당 값 노출
        }, 1000); // 1초 후 
    })
} 

getData()
.then((result) => console.log(result)) // 성공 시 1초 후 Promise로 처리한 데이터 값 노출
.catch((error) => console.log(error)); // 실패 시
