// promise <- 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타낸다.
const kamja = new Promise((resolve, reject) => {
    // resolve <- error가 없을때의 값
    // reject <- error가 있을때의 값
    setTimeout(resolve, 3000, "Yes you are");
});

console.log(kamja);
setInterval(console.log, 1000, kamja);