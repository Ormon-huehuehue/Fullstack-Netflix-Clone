"use client";

import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import { GrFormSubtract } from "react-icons/gr";

import useSWR, { mutate } from 'swr';
import fetcher from '@/lib/fetcher';
import axios from 'axios';
import {useToast } from './ui/use-toast';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import getCurrentUser from '@/actions/getCurrentUser';
import { useState } from 'react';





const addFavourite = async (movieId: string) => {
  const response = await axios.post('/api/addFavourite', { movieId });
  return response.data;
};

const removeFavourite = async (movieId: string) => {
  const response = await axios.delete(`/api/removeFavourite/${movieId}`);
  return response.data;
};




// const isFavourite = user.favourites.some((fav: mongoose.Types.ObjectId) => fav != null && fav.equals(existingMovie._id));

interface FavouriteButtonProps {
  movieId: string;
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({ movieId }) => {

  const queryClient = useQueryClient();
  const {data:user, error} = useQuery({
    queryKey:['currUser'],
    queryFn: getCurrentUser
  })
  const isFavourite = (movieId : string):boolean =>{
    return user?.favourites.some(fav=> fav == movieId);
  }
  
  const [addButton, setAddButton] = useState(isFavourite(movieId) as boolean)

  const {toast } = useToast();

  //using SWR to fetch the favourites and keep them up to date
  const { data: favourites } = useSWR('/api/favourites', fetcher);

  //using react-query to fetch the current user

  //checking if the movie is already in the user's favourites

  const handleAddFavourite = async () => {
    try {
      const data = await addFavourite(movieId);
      if (data.error) {
        toast({ title: data.error });
      } else {
        toast({ title: 'Movie added to favourites' });
        mutate('/api/favourites');
        setAddButton(prev=>!prev)
        queryClient.invalidateQueries({queryKey:['currUser']});
      }
    } catch (error) {
      toast({ title: 'Failed to add movie to favourites' });
      console.error('Error adding favourite:', error);
    }
  };

  const handleRemoveFavourite = async () => {
    try {
      const data =  await removeFavourite(movieId);
      if (data.error) {
        toast({ title: data.error });
      } else {
        toast({ title: 'Movie removed from favourites' });
        mutate('/api/favourites');
        setAddButton(prev=>!prev)
        queryClient.invalidateQueries({queryKey:['currUser']});
      }
    } catch (error) {
      toast({ title: 'Failed to remove movie from favourites' });
      console.error('Error removing favourite:', error);
    }
  }

  return (
    <div
      onClick={addButton ? handleRemoveFavourite : handleAddFavourite}
      className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
    >
      {addButton ? <GrFormSubtract size={30} /> : <IoIosAdd size={30} />}
    </div>
  );
};

export default FavouriteButton;
