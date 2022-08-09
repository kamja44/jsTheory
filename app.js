const getMoviesAsync = async() => {
  try{
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    // const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await response.json();
    console.log(json);
    throw Error("Im hungry");
  } catch(error){
    console.log(`❌ ${error}`);
  } finally {
    console.log(`We are done!`);
  }
  
}

getMoviesAsync();