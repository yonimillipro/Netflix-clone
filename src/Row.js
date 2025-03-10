//rfce
import React, {useState, useEffect}  from 'react'
import axios from './axios';
import "./Row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url= "https://image.tmdb.org/t/p/original/";


function Row({title, fetchUrl, isLargeRow}) {
 
  const [movies, setMovies] =  useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

   useEffect(() =>{ 
    
    async  function fetchData (){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.table(request.data.results)
      return request;

    }

         fetchData();

  }, [fetchUrl]); //fetchUrl is dependendency out side of the block in pops spot.
 
  //console.log(movies);
  console.table(movies);
  
const opts = {
  height: "390",
  width: "100%",
  playerVars:{
     autoplay: 1,
  },

};

const handleClick = (movie) => {

  if (trailerUrl) {
    setTrailerUrl("");
  
  } else {
    movieTrailer(movie?.name || movie?.title || movie?.original_name ||"")
    .then((url) => {
      const useParams = new URLSearchParams (new URL(url).search);
      setTrailerUrl(useParams.get('v'));    
    })
        .catch((error) => console.log(error));
  } 
};
  

 
 

  return (
    //download vim is used for th class
    <div className="row"> 
     <h1>{title}</h1> 
     
      <div className="row_posters">
      
      {movies.map((movie) => (
          <img  
          key={movie.id}
          onClick={() => handleClick(movie)}
          className={`row_poster ${isLargeRow && "row_posterLarge"}`} // it'll row_poster class givin but if it's isLargeRow=true will add row_posterLarge this class additionly   
          src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
          alt={movie.name}
          />
            ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
  </div>
  );
}

export default Row
