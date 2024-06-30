"use server"

import React from 'react'
import MovieCard from './MovieCard'


interface MovieListProps{
    movies: Record<string, any>[],
    Title:string
}

const MovieList:React.FC<MovieListProps> = async  ({movies , Title}) => {


  return (
    <div className = "px-4 md:px-12 mt-4 space-y-8">
        <div id = "movielistcard" className = "w[100px]">\
            <p className ="text-white text-md md:text-xl lg:text-2xl font-semibold">
                {Title}
            </p>
            <div className="grid grid-cols-4 gap-2 mt-5">
                {movies.map((movie)=>(
                    <div key = {movie._id}>
                        <MovieCard title = {movie.title} description = {movie.description} thumbnail = {movie.thumbnail}  genre = {movie.genre} url ={movie.videoPath} movieId={movie._id}/>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default MovieList