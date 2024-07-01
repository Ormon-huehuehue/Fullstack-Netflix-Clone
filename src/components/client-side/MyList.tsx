"use client"

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import React,{useEffect, useState} from 'react';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import MovieCard from '../MovieCard';


interface MovieListProps {
  Title: string;

}

const MyList: React.FC<MovieListProps> = ({ Title }) => {

  // Fetching favourites
  const { data: favourites } = useSWR('/api/favourites', fetcher);
  console.log(favourites)

  console.log(favourites);

  
    return (
      <div className="bg-black px-4 md:px-12 pt-4 space-y-8">
        <div id="movielistcard" className="w[100px] bg-black">
          <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">
            {Title}
          </p>
          <div className="grid grid-cols-4 gap-2 mt-5">
          
          
          {
              favourites?.map((movie) => (
              <div key={movie._id}>
                <MovieCard movie={movie} />
              </div>
            ))}
           
          </div>
        </div>
      </div>
    );
  };

export default MyList;