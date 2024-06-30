"use server"

import React from 'react'
import useMovieList from '@/hooks/useMovieList'

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';

const page =  async() => {
  const movies = await useMovieList();

  

  return (
    <div className="h-screen bg-black object-fill relative">
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar/>
      </div>
      <div className="absolute top-0 left-0 w-full z-0">
        <Billboard/> 
        <MovieList Title="Trending now" movies = {movies} />
      </div>
    </div>
  )
}

export default page