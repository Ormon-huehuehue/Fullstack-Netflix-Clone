"use client";

import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import useSWR, { mutate } from 'swr';
import fetcher from '@/lib/fetcher';
import axios from 'axios';
import {useToast } from './ui/use-toast';



const addFavourite = async (movie:Record<string,any>) => {
  const response = await axios.post('/api/addFavourite', { movie });
  return response.data;
};



interface FavouriteButtonProps {
    movie: Record<string, any>
}


const FavouriteButton: React.FC<FavouriteButtonProps> = ({ movie}) => {
  const {toast } = useToast();
  const { data: favourites } = useSWR('/api/favourites', fetcher);

  const handleAddFavourite = async () => {
    try {
      await addFavourite(movie);
      toast({title:'Movie added to favourites'});
      mutate('/api/favourites');
    } catch (error) {
      toast({title:'Failed to add movie to favourites'});
      console.error('Error adding favourite:', error);
    }
  };

  return (
    <div
      onClick={handleAddFavourite}
      className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
    >
      <IoIosAdd size={30} />
    </div>
  );
};

export default FavouriteButton;
