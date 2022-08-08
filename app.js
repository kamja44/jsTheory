// promise <- 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타낸다.
const kamja = new Promise((resolve, reject) => {
    // resolve <- error가 없을때의 값
    // reject <- error가 있을때의 값
    // setTimeout(resolve, 3000, "Yes you are");
    setTimeout(reject, 3000, "Potato");
    
});

// kamja.then(value => console.log(value));

// const thenFn = value => console.log(value);
// kamja.then(thenFn);
kamja
    .then(result => console.log(result)) // promise가 resolve 일 경우
    .catch(error => console.log(error)); // promise가 reject 일 경우
// catch <- reject일 경우(error가 발생했을 경우) 실행
// then이 실행되면 catch는 절대로 실행되지 않는다.
// catch가 실행되면 then은 절대로 실행되지 않는다.