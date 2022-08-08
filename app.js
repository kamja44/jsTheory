// Promise Race -> Promise중 하나라도 resolve 되거나 reject 되면 된다.

const p1 = new Promise(resolve => {
    setTimeout(resolve, 10000, "First");
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 5000, "kamja");
});
const p3 = new Promise(resolve => {
    setTimeout(resolve, 3000, "Third");
});
const racePromise = Promise.race([p1,p2,p3]);
// Promise Race는 가장 빠른 Promise가 반환된다.

racePromise
  .then(value => console.log(value))
  .catch(error => console.log(error));