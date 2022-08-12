// Promise.all <- 서로 상관이 있는 Promise들을 동작시킬때 사용
const p = Promise.all([
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch(),
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json"),
])
.then(response => console.log("success! ",response))
.catch(error => console.log("error : ", error));


// status : rejected <- false, status : fulfilled <- true
// allSettled <- all처럼 모두 성공하지 않아도 된다. 즉,Promise 동작이 끝나기만 하면 된다.
// Promise.allSettled <- promise들이 서로 독립적이라 상관없을 때
const t = Promise.allSettled([
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch(),
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json"),
])
.then(response => console.log("success! ",response))
.catch(error => console.log("error : ", error));