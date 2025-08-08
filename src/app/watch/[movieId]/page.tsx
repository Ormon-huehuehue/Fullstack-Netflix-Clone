"use client"

import React, { useEffect, useState, useRef } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import axios from 'axios';
import { movieInterface } from '@/components/MovieList';
import Link from 'next/link';
import VideoPlayer from '@/components/client-side/VideoPlayer';
import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';

const getMovieData = async (movieId: string) => {
  const response = await axios.get(`/api/movies/${movieId}`)
  return response.data;
};

const Page = ({params}: {params : {movieId:string}}) => {

    const [data, setData ] = useState<movieInterface>()

    const movieId = params.movieId;

    const onReload = async()=>{
        const data = await getMovieData(movieId);
        setData(data)
    }

    useEffect(()=>{
        onReload()
    },[movieId])

    const playerRef = useRef<Player | null>(null);
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

    const handlePlayerReady = (player: Player)=>{
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

export default Page