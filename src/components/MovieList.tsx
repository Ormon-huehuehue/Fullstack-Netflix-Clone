

import React from 'react';
import MovieCard from './MovieCard';

import getMovies from '@/actions/getMovies';
import mongoose from 'mongoose';

export interface MovieListProps {
  Title: string;
}

export interface movieInterface{
  _id: mongoose.Types.ObjectId;
  videoPath : string
  thumbnail: string,
  title: string,
  description : string,
  genre: string;
  views : number
}

const MovieList: React.FC<MovieListProps> = async({ Title }) => {


  const movies = await getMovies();
  
  // const convertedMovies =(movies &&  movies?.map(movie => JSON.parse(JSON.stringify(movie._doc))) ) 
  
  return (
      <div className="bg-black px-4 md:px-12 pt-4 space-y-8">
        <div id="movielistcard" className="w[100px]">
          <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">
            {Title}
          </p>
          <div className="grid grid-cols-4 gap-2 mt-5">
          {
          movies?.map((movie, i: number) => {
               
            return (
              <div key={i}>
                <MovieCard thumbnail = {movie.thumbnail} _id = {  movie._id.toString()} genre = {movie.genre} title = {movie.title}
                description = {movie.description}
                videoPath = {movie.videoPath}
                />
              </div>
            );
          })
        }
          </div>
        </div>
      </div>
 
  
    );
  };

export default MovieList;