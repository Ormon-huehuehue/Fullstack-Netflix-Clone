

import React from 'react';
import MovieCard from './MovieCard';

import getMovies from '@/actions/getMovies';
import mongoose from 'mongoose';

interface MovieListProps {
  Title: string;
}

const MovieList: React.FC<MovieListProps> = async({ Title }) => {


  const movies = await getMovies();
  
  const convertedMovies =(movies &&  movies?.map(movie => JSON.parse(JSON.stringify(movie._doc))) ) 
  
  return (
      <div className="bg-black px-4 md:px-12 pt-4 space-y-8">
        <div id="movielistcard" className="w[100px]">
          <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">
            {Title}
          </p>
          <div className="grid grid-cols-4 gap-2 mt-5">
            {
              convertedMovies?.map((movie, i:number) => (
                <div key={i}>
                  <MovieCard movie={movie} />
                </div>
            ))}
          </div>
        </div>
      </div>
 
    // Convert movies to plain objects by serializing to JSON and parsing

  
    );
  };

export default MovieList;