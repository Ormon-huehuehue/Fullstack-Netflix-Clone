
import React, { useEffect, useState } from 'react';
import useMovieList from '@/hooks/useMovieList';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import favFetcher from '@/lib/favouritesFetcher';
import MyList from '@/components/client-side/MyList';


 

const page = async () => {
  // const { data: movies, error: moviesError } = useSWR('moviesList', useMovieList);
  // const { data: favourites,error } = useSWR('/api/favourites', fetcher);
  // console.log(favourites)

  const movies = await useMovieList();

  return (
    <div className="h-screen bg-black object-fill relative">
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      <div className="absolute top-0 left-0 w-full z-0">
        <Billboard />
        <MovieList Title="Trending now" movies={movies} />
        <MovieList Title="Top picks for you" movies={movies} />
        <MyList Title = "My List"/>
        {/* <MovieList Title="My list" movies={favourites} /> */}
      </div>
    </div>
  );
}

export default page;
