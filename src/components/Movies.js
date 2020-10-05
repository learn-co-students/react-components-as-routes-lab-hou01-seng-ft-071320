import React from 'react';
import { movies } from '../data';

const Movies = (props) => {
  return (
    <div>
     <h1>Movies Page</h1>
       { movies.map(movie=>(
          <div>
            <h3>Title: {movie.title}</h3>       
            <h3>Time: {movie.time}</h3> 
            <ul>
              <h3> Genres:  </h3> 
             {movie.genres.map(genre=>(
               <li>{genre}</li>))}
            </ul>
          </div>
       ))}
    </div>
  )
};

export default Movies;
