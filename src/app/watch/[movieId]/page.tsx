"use client"

import React, { useEffect, useState } from 'react'
import useMovie from "../../../hooks/useMovie"
import Navbar from '@/components/Navbar';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import { movieInterface } from '@/components/MovieList';
import Link from 'next/link';
import VideoPlayer from '@/components/client-side/VideoPlayer';
import { useRef } from 'react';

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

    const playerRef = useRef(null);
    const videoLink =  "/hslIndex.m3u8"
    const videoPlayerOption = {
      controls : true,
      responsive : true,
      fliud : true,
      sources : {
        src : videoLink,
        trpe : "application/x-mpegURL"
      }
    }

    const handlePlayerReady = (player)=>{
      playerRef.current = player;
  
      player.on("waiting", ()=>{
        videojs.log("Player is waiting")
      })
  
      player.on("dispose", ()=>{
        videojs.log("Player will disposed")
      })
    }


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

        {url ? 
        <video controls src ={url} loop className= "h-full w-full"/> :
        <VideoPlayer 
        options = {videoPlayerOption}
        onReady = {handlePlayerReady}/> 

        }
    </div>
  )
}

export default page