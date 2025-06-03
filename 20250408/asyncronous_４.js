/*      
        async / await :
        프로미스를 좀 더 쉽게 사용할 수 있도록 es8에서 도입된 문법
        비동기 코드를 마치 동기 코드처럼 깔끔하게 작성할 수 있도록 한다.

        async : 함수 앞에 붙여서 비동기 함수로 만듭니다. 항상 Promise를 반환합니다.
        await : Promise가 처리될 때까지 기다림 (resolve될 때까지). async 함수 안에서만 사용 가능
*/

function getData() {
    return new Promise((resolve, reject) => {  
        setTimeout(() => {
            resolve('async / await로 처리한 데이터');
        }, 1000);
    })
} 

async function fetchData() {
    try {
        const result = await getData();
        console.log(result);
    } catch(error) {
        console.log(error);
    }
}
fetchData();
