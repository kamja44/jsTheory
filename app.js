// fetch <- fetch는 Promise를 return한다. 뭔가를 가져온다.
// yts.am <- json
fetch("https://yts.mx/api/v2/list_movies.json")
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(json => console.log(json))
  .catch(error => console.log(error));
