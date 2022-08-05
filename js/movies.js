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

        <li class="flex h-[116px] group  w-full items-center text-[12px] font-semibold  bg-colorLightGray ">
            
        <a class=" w-1/2 h-full " href="">
            <img class=" object-cover h-full w-full flex |  group-hover:animate-pulse" src="${image}" alt="Film Visual Media cap">
        </a>
        
            <div class="w-6/12 flex flex-col pl-[5px] pr-[5px] ">
                            
                <section class=" flex items-center w-full justify-between p-[5px]   	">
                    <div class="flex  pl-[5px] ">     
                        <p class="border-b-2 border-colorPurpleDark h-fit   ">
                        ${title}
                        </p>
                    </div>     
                    <div class="flex items-center gap-2.5">
                    <div class="flex gap-[5px]">

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

                    <a class="" href="">

                    <i class="h-[22px] w-[22px] | bg-clip-text | hover:text-colorPurpleLight  bg-gradient-to-b from-colorPurpleLight to-colorBlueDark  fa-solid fa-star"></i>
                    </a>
                    

                    </div> 
                </section>


                        
                <section class="pl-[5px]  flex flex-col text-[10px]     ">
                    <div class="flex gap-[5px]">
                        <p class=" ">
                            Genre :
                        </p>
                        <p class="font-medium">
                        ${category}
                        </p>
                    </div> 
                    <div class="flex gap-[5px]">
                        <p class=" ">
                            Dir :
                        </p>
                        <p class="font-medium">
                            ${director}
                        </p>
                    </div> 
                </section>
                
                <div class="flex text-[12px] group font-bold justify-end pb-[5px] pr-[5px] border-colorPurpleLight  "> 
                    <a href="" 
                    class="flex py-[8px]  px-[16px] rounded-[4px]  border-2 text-colorPurpleLight border-colorPurpleLight |  | hover:border-colorPurpleDark hover:bg-colorPurpleDark hover:text-colorLightGray ">
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