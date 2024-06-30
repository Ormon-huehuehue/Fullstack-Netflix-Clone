"use client";

import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import useSWR, { mutate } from 'swr';
import fetcher from '@/lib/fetcher';
import axios from 'axios';
import {useToast } from './ui/use-toast';

const addFavourite = async (movieId: string) => {
  console.log("addfav called")
  const response = await axios.post('/api/addFavourite', { movieId });
  return response.data;
};



interface FavouriteButtonProps {
  movieId: string;
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({ movieId }) => {
  const {toast } = useToast();
  const { data: favourites } = useSWR('/api/favourites', fetcher);

  console.log("Favourites API called:", favourites);

  const handleAddFavourite = async () => {
    try {
      await addFavourite(movieId);
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
