const API_KEY='ee532b851e5e4a009f86837eacc40f6a';

//const API_KEY = "e2f6a3207018bb245574ab358f4e0408";
//const API_KEY = "0f94e738f29d3fd23f5a70e5de32b6b6";


//copy youtube or github
  const requests = {
                   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
                    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, 
                    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, 
                    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
                    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
                    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, 
                    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
                     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
   }

   

  
  export default requests;


// const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";

// const requests = {
//   fetchTrending: '/trending/all/week?api_key=${API_KEY}&language=en-US',

//   fetchNetflixOriginals: '/discover/tv?api_key=${API_KEY}$with_networks=213',
//   fetchTopRated: '/movie/top_rated?api_key=${API_KEY}&language=en-US',
//   fetchActionMovies: '/discover/movie?api_key={API_KEY}&with_genre=28',
//   fetchComedyMovies: '/discover/movie?api_key={API_KEY}&with_genre=35',
//   fetchHorrorMovies: '/discover/movie?api_key={API_KEY}&with_genre=27',
//   fetchRomanceMovies: '/discover/movie?api_key={API_KEY}&with_genre=10749',
//   fetchDocumentaries: '/discover/movie?api_key={API_KEY}&with_genre=99',
// }
// export default requests;