// promise all <- 주어진 모든 promise를 실행한 후 진행되는 하나의 promise를 반환한다.
// 즉, 모든 Promise가 전부 resolve 되고 나면 마지막 Promise를 리턴값으로 반환한다.
const p1 = new Promise((resolve) => {
    setTimeout(resolve, 5000, "First");
});
const p2 = new Promise((resolve, reject) => {
    // setTimeout(resolve, 1000, "Second");
    setTimeout(reject, 1000, "kamja");
});
const p3 = new Promise((resolve) => {
    setTimeout(resolve, 3000, "Third");
});

const allPromise = Promise.all([p1,p2,p3]);
// Promise.all이 다른 Promise들이 전부 진행 될 때까지 기다렸다가 진행된다.
// Promise.all의 Promise중 하나라도 reject이면, Promise.all도 reject된다.
allPromise
  .then(values => console.log(values))
  .catch(err => console.log(err));
// Promise.all의 결과는 array로 반환한다.