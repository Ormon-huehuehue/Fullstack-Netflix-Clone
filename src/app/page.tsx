import React from 'react';
import getMovies from '@/actions/getMovies';
import  getFavourites from '@/actions/getFavourites';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import MyList from '@/components/client-side/MyList';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';


const Page = async () => {
  const queryClient = new QueryClient();

  // Prefetch the data
  await Promise.all([
    queryClient.prefetchQuery(['movies'], getMovies),
    queryClient.prefetchQuery(['favourites'], getFavourites),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="h-screen bg-black object-fill relative">
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      <div className="absolute top-0 left-0 w-full z-0">
        <Billboard />
        <HydrationBoundary state={dehydratedState}>
          <MovieList Title="Trending now" />
          <MovieList Title="Top picks for you" />
          <MyList Title="My List" />
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default Page;
