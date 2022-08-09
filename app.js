// const response = await fetch("https://yts.mx/api/v2/list_movies.json");
//     const upcoming = await fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=100")
const getMoviesAsync = async() => {
  try{
    const [moviesResponse, suggestionsResponse] = await Promise.all(
      [fetch("https://yts.mx/api/v2/list_movies.json"), 
      fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=100")]);
    const [movies, suggestions] = await Promise.all([moviesResponse.json(), suggestionsResponse.json()]);
    console.log(movies, suggestions);
  } catch(error){
    console.log(`${error}`);
  } finally {
    console.log(`We are Done!`);
  }
  
}

getMoviesAsync();