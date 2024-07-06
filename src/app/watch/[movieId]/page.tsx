"use client"

import React, { useEffect, useState } from 'react'
import useMovie from "../../../hooks/useMovie"
import Navbar from '@/components/Navbar';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import { movieInterface } from '@/components/MovieList';
import Link from 'next/link';

const getMovieData = async (movieId: string) => {
  const response = await axios.get(`/api/movies/${movieId}`)
  return response.data;
};

const page = ({params}: {params : {movieId:string}}) => {

    const [data, setData ] = useState<movieInterface>()

    const movieId = params.movieId;

    const onReload = async()=>{
        const data = await getMovieData(movieId);
        setData(data)
    }

    useEffect(()=>{
        onReload()
    },[])


    console.log(data)

    const title = data?.title as string;
    const url = data?.videoPath as string;

    

  return (
    <div className = "h-screen w-screen bg-black">
        <nav 
        className = "fixed w-full p-4 z-10 flex items-center gap-8  bg-black bg-opacity-70"
        >
            <Link href = "/">
            <IoIosArrowBack className= "text-white" size={29}/>
            </Link>
         
            <span className= "font-montserrat text-white text-xl "> Watching  : 
                <span className = "font-semibold px-2 text-xl font-palanquin">{title}</span> 
            </span>

        </nav>

        <video controls src ={url} loop className= "h-full w-full"/>

    </div>
  )
}

export default page