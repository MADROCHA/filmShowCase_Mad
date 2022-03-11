const requestURL = "peliculas.json";

async function fetchMoviesJSON(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}
fetchMoviesJSON().then(movies => {
    for (let index = 0; index < movies.peliculas.length; index++){
        
    

}
    
