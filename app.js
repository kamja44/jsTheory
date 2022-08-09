// Using Pormise
const getMoviesPormise = () => {
  // fetch <- fetch는 Promise를 return한다. 뭔가를 가져온다.
// yts.am <- json
fetch("https://yts.mx/api/v2/list_movies.json")
.then(response => {
  console.log(response);
  return response.json();
})
.then(json => console.log(json))
.catch(error => console.log(error));
}

// Using Async
const getMoviesAsync = async() => {
  // const response = fetch("https://yts.mx/api/v2/list_movies.json")
  const response = await fetch("https://yts.mx/api/v2/list_movies.json")
  // await는 기본적으로 Promise가 끝나길 기다린다.(결과가 resolve든, reject든 상관없다.) 즉, 성공하든 실패든 Promise의 완료를 기다린다.
  // resolve된 값을 response에 할당한다.
  const json = await response.json();
  console.log(json);
}

getMoviesAsync();