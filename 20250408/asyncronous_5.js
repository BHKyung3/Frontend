/*      
        async / await :
        프로미스를 좀 더 쉽게 사용할 수 있도록 es8에서 도입된 문법
        비동기 코드를 마치 동기 코드처럼 깔끔하게 작성할 수 있도록 한다.
*/

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function example() {
    console.log("시작!");
    await wait(3000);
    console.log("3초 후 실행됩니다.");
}
example();
