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
        

        filmSection.innerHTML+=`
    <li class="flex  w-full h-full items-center  bg-colorLightGray">
        
        
            <img class="w-1/3  flex " src="${image}" alt="Film Visual Media cap">
        
        
            <div class="w-full flex flex-col px-2.5  ">
                    
            
                    <section class=" flex w-full    	">
                        <div class="flex ">     
                            <p class="   ">
                            ${title}
                            </p>
                        </div>     
                        <div class="flex">
                            <p>
                            4
                            </p>
                            <p>
                            /
                            </p>
                            <p>
                            5
                            </p> 
                        </div> 
                    </section>


                            
                    <section class="flex flex-col     ">
                        <div class="flex gap-[10px]">
                            <p class=" ">
                                Genre :
                            </p>
                            <p class="">
                                ${category}
                            </p>
                        </div> 
                        <div class="flex gap-[10px]">
                            <p class=" ">
                                Dir :
                            </p>
                            <p>
                                ${director}
                            </p>
                        </div> 
                    </section>
                    
                    <div class="flex     border-2 border-colorPurpleLight  "> 
                        <a href="" 
                        class="flex py-4  px-8 rounded-[4px] text-xl border-2 text-colorPurpleLight border-colorPurpleLight ">
                            see more
                        </a>
                    </div> 
            </div> 
        
                
                    
        
    </li> 
                

            

        
    `  }    
})
    
/*             <div class="" style="width: 18rem;">
                <img class="" src="${image}" alt="Card image cap">
                <div class="">
                    <h5 class="text-3xl underline">${title}</h5>
                    <p class="">${director}</p>
                    <p class="">${category}</p>
                </div>
            </div> */