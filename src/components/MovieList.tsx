

import React from 'react';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Record<string, any>[];
  Title: string;
}

const MovieList: React.FC<MovieListProps> = ({ movies, Title }) => {
 
    // Convert movies to plain objects by serializing to JSON and parsing

    const convertedMovies = movies.map(movie => JSON.parse(JSON.stringify(movie._doc)));
  
    return (
      <div className="bg-black px-4 md:px-12 pt-4 space-y-8">
        <div id="movielistcard" className="w[100px]">
          <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">
            {Title}
          </p>
          <div className="grid grid-cols-4 gap-2 mt-5">
          <div>Favourite: {JSON.stringify(movies)}</div>
            {convertedMovies.map((movie) => (
              <div key={movie._id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default MovieList;