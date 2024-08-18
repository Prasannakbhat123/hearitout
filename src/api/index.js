export const getTvShows = async()=>{
   const response = await fetch('https://api.tvmaze.com/search/shows?q=cars',
        {method:'GET',}
    );
    return await response.json();
}