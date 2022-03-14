const requestURL = "./json/peliculas.json";

async function fetchMoviesJSON(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}
fetchMoviesJSON().then(movies => {
    for (let index = 0; index < movies.peliculas.length; index++){
        const movieSection = document.getElementById('movieSection');
        let title = movies.peliculas[index].nombre;
        let director = movies.peliculas[index].director;
        let category = movies.peliculas[index].clasificacion;
        let image = movies.peliculas[index].imagen;
        

        movieSection.innerHTML+=`
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${director}</p>
                <p class="card-text">${category}</p>

                
            </div>
            </div>

        `
    }    
    

})
    
