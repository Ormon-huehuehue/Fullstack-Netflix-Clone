"use client";

import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import { GrFormSubtract } from "react-icons/gr";

import useSWR, { mutate } from 'swr';
import fetcher from '@/lib/fetcher';
import axios from 'axios';
import {useToast } from './ui/use-toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import getCurrentUser from '@/actions/getCurrentUser';
import { useState } from 'react';
import mongoose from 'mongoose';
import getFavourites from '@/actions/getFavourites';




// const addFavourite = async (movieId: string) => {
//   const response = await axios.post('/api/addFavourite', { movieId });
//   return response.data;
// };

// const removeFavourite = async (movieId: string) => {
//   const response = await axios.delete(`/api/removeFavourite/${movieId}`);
//   return response.data;
// };



// interface FavouriteButtonProps {
//   movieId: string;
// }

const FavouriteButton = ( {movieId} : {movieId:string}) => {
  
  //using react-query to fetch the current user
  const queryClient = useQueryClient();


  const {data:user, error} = useQuery({
    queryKey:['currUser'],
    queryFn: getCurrentUser
  })


  
  //checking if the movie is already in the user's favourites
  const isFavourite = (movieId : string):boolean =>{
    return user?.favourites.some((fav: mongoose.Types.ObjectId) => fav && fav.toString() == movieId)
  }
  
  const [addButton, setAddButton] = useState(isFavourite(movieId) as boolean)

  const {toast } = useToast();



  const email = user?.email;


  // Fetching favourites
  // const { data: favourites } = useSWR(`/api/favourites/${userEmail}`, fetcher);
  // // console.log(favourites)


  const {mutate: addToFavs, isPending} = useMutation({
    mutationFn : async ()=> await axios.post('/api/addFavourite', { movieId }),
    onSuccess:()=>{
      toast({
        title: 'Movie added to favourites'
      })
      setAddButton(prev=>!prev)
      mutate('/api/favourites');
   
     
      queryClient.invalidateQueries({queryKey:['currUser']});
    },
    onError: ()=>{
      toast({
        title: 'Failed to add movie to favourites'
      })
    }
  })
 
  const {mutate: removeFromFavs}   = useMutation({
    mutationFn : async ()=> await axios.delete(`/api/removeFavourite/${movieId}`),
    onSuccess: ()=>{
      toast({
        title: 'Movie removed from favourites'
      })
      setAddButton(prev=>!prev)
      mutate('/api/favourites');
      queryClient.invalidateQueries({queryKey:['currUser']});
    },
    onError: ()=>{
      toast({
        title: 'Failed to remove movie from favourites'
      })
    }
  })







  // const handleAddFavourite = async () => {
  //   try {
  //     const data = await addFavourite(movieId);
  //     if (data.error) {
  //       toast({ title: data.error });
  //     } else {
  //       toast({ title: 'Movie added to favourites' });
  //       mutate('/api/favourites/${userEmail}');
  //       setAddButton(prev=>!prev)
  //       queryClient.invalidateQueries({queryKey:['currUser']});
  //     }
  //   } catch (error) {
  //     toast({ title: 'Failed to add movie to favourites' });
  //     console.error('Error adding favourite:', error);
  //   }
  // };

  // const handleRemoveFavourite = async () => {
  //   try {
  //     const data =  await removeFavourite(movieId);
  //     if (data.error) {
  //       toast({ title: data.error });
  //     } else {
  //       toast({ title: 'Movie removed from favourites' });
  //       mutate('/api/favourites/${userEmail}');
  //       setAddButton(prev=>!prev)
  //       queryClient.invalidateQueries({queryKey:['currUser']});
  //     }
  //   } catch (error) {
  //     toast({ title: 'Failed to remove movie from favourites' });
  //     console.error('Error removing favourite:', error);
  //   }
  // }

  return (
    <div
      onClick={addButton ? ()=>removeFromFavs() : ()=> addToFavs()}
      className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
    >
      {addButton ? <GrFormSubtract size={30} /> : <IoIosAdd size={30} />}
    </div>
  );
};

export default FavouriteButton;
